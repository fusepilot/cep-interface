import * as cs from "./cs-interface";
import path = require("path");

/**
 * Returns the absolute path of the extension.
 */
export function getExtensionPath(): string {
  return cs.getSystemPath(cs.SystemPath.EXTENSION);
}

/**
 * Evaluates a JavaScript script, which can use the JavaScript DOM
 * of the host application.
 *
 * @param script    The JavaScript script.
 * @param callback  Optional. A callback function that receives the result of execution.
 *          If execution fails, the callback function receives the error message \c EvalScript_ErrMessage.
 */
function evalScript(script: string, callback: (executionResult: any) => void) {
  if (callback === null || callback === undefined) {
    callback = function callback(result) {};
  }
  script = `try {
    ${script}
  } catch(e) {
    '{"error": "' + e.name + '", "message": "' + e.message.replace(/"/g, \"'\") + '", "stack": "' + (e.stack ? e.stack.replace(/"/g, \"'\") : \"\") + '"}'
  }`;
  window.__adobe_cep__.evalScript(script, callback);
}

/**
 * Loads an extendscript file in the extension folder.
 *
 * @param fileName The name of the extendscript file.
 */
export function loadExtendscript(fileName: string): Promise<any> {
  if (!fileName) throw Error("Filename cannot be empty.");

  var extensionRoot = cs.getSystemPath(cs.SystemPath.EXTENSION);
  // @ts-ignore
  return new Promise(function(resolve, reject) {
    const filePath = path
      .join(extensionRoot, fileName)
      .split("\\")
      .join("/");

    evalScript(`$.evalFile("${filePath}")`, function(result) {
      if (!result || result === "undefined") return resolve();

      try {
        result = JSON.parse(result);
      } catch (err) {}

      if (result.error != undefined) {
        reject(
          new Error(
            `ExtendScript ${result.error}: ${result.message}\n${result.stack}`
          )
        );
      }

      resolve(result);
    });
  });
}

/**
 * Evaluates a JavaScript script, which can use the JavaScript DOM
 * of the host application.
 *
 * @param script    The JavaScript script.
 * @return The result of execution. If the result is a valid JSON string, it will return the parsed JSON object.
 */
export function evalExtendscript(script: string): Promise<any> {
  if (!cs.inCEPEnvironment()) console.warn("Not in CEP environment.");

  // @ts-ignore
  return new Promise(function(resolve, reject) {
    var doEvalScript = function() {
      evalScript(script, function(executionResult: any) {
        if (!executionResult || executionResult === "undefined")
          return resolve();

        try {
          executionResult = JSON.parse(executionResult);
        } catch (err) {}

        if (executionResult.error != undefined) {
          reject(
            new Error(
              `ExtendScript ${executionResult.error}: ${
                executionResult.message
              }\n${executionResult.stack}`
            )
          );
        }

        resolve(executionResult);
      });
    };

    setTimeout(doEvalScript, 0);
  });
}

export interface ContextMenuItem {
  id?: string;
  label?: string;
  enabled?: boolean;
  checkable?: boolean;
  checked?: boolean;
  icon?: string;
  menu?: ContextMenuItem[];
}

export interface ContextMenu {
  menu: ContextMenuItem[];
}

export function setContextMenuByObject(menu: ContextMenu, callback: Function) {
  cs.setContextMenuByJSON(JSON.stringify(menu), callback);
}
