import * as cs from './cs-interface'
import path = require('path')

/**
 * Returns the absolute path of the extension.
 */
export function getExtensionPath(): string {
  return cs.getSystemPath(cs.SystemPath.EXTENSION)
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
    callback = function callback(result) {}
  }
  script = `
  try {
    ${script}
  } catch(e) {
    '{"error": "' + e.name + '", ' + '"message": "' + e.message.replace(/"/g, \"'\") + '"}'
  }
  `
  window.__adobe_cep__.evalScript(script, callback)
}

/**
 * Loads an extendscript file in the extension folder.
 *
 * @param fileName The name of the extendscript file.
 */
export function loadExtendscript(fileName: string) {
  if (!fileName) throw Error('Filename cannot be empty.')

  var extensionRoot = cs.getSystemPath(cs.SystemPath.EXTENSION)
  return new Promise(function(resolve, reject) {
    const filePath = path.join(extensionRoot, fileName)
    evalScript(`$.evalFile("${filePath}")`, function(result) {
      if (!result || result === 'undefined') return resolve()

      try {
        result = JSON.parse(result)
      } catch (err) {}

      resolve(result)
    })
  })
}

/**
 * Evaluates a JavaScript script, which can use the JavaScript DOM
 * of the host application.
 *
 * @param script    The JavaScript script.
 * @return The result of execution. If the result is a valid JSON string, it will return the parsed JSON object.
 */
export function evalExtendscript(
  script: string,
  { async = false }: { async?: boolean } = {}
) {
  if (!cs.inCEPEnvironment()) console.warn('Not in CEP environment.')

  return new Promise(function(resolve, reject) {
    var doEvalScript = function() {
      evalScript(script, function(executionResult: any) {
        if (!executionResult || executionResult === 'undefined')
          return resolve()

        try {
          executionResult = JSON.parse(executionResult)
        } catch (err) {}

        if (executionResult.error != undefined) {
          throw new Error(
            `ExtendScript ${executionResult.error}: ${executionResult.message}`
          )
        }

        resolve(executionResult)
      })
    }

    if (async) {
      setTimeout(doEvalScript, 0)
    } else {
      doEvalScript()
    }
  })
}
