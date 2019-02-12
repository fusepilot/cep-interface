/// <reference path="../window.d.ts" />

export const CSXSWindowType = {
  _PANEL: 'Panel',
  _MODELESS: 'Modeless',
  _MODAL_DIALOG: 'ModalDialog',
}

/** EvalScript error message */
export const EvalScript_ErrMessage = 'EvalScript error.'

/**
 * @interface Version
 * Defines a version number with major, minor, micro, and special
 * components. The major, minor and micro values are numeric; the special
 * value can be any string.
 *
 * @param major   The major version component, a positive integer up to nine digits long.
 * @param minor   The minor version component, a positive integer up to nine digits long.
 * @param micro   The micro version component, a positive integer up to nine digits long.
 * @param special The special version component, an arbitrary string.
 */
export interface Version {
  major: string
  minor: string
  micro: string
  special: string
}

export const VERSION_MAX_NUM = 999999999

/**
 * @interface VersionBound
 * Defines a boundary for a version range, which associates a \c Version object
 * with a flag for whether it is an inclusive or exclusive boundary.
 *
 * @param version   The \c #Version object.
 * @param inclusive True if this boundary is inclusive, false if it is exclusive.
 */
export interface VersionBound {
  version: string
  inclusive: string
}

/**
 * @interface VersionRange
 * Defines a range of versions using a lower boundary and optional upper boundary.
 *
 * @param lowerBound The \c #VersionBound object.
 * @param upperBound The \c #VersionBound object, or null for a range with no upper boundary.
 */
export interface VersionRange {
  lowerBound: string
  upperBound: string
}

/**
* @interface Extension
* Encapsulates a CEP-based extension to an Adobe application.
*
* @param id              The unique identifier of this extension.
* @param name            The localizable display name of this extension.
* @param mainPath        The path of the "index.html" file.
* @param basePath        The base path of this extension.
* @param windowType          The window type of the main window of this extension.
                 Valid values are defined by \c #CSXSWindowType.
* @param width           The default width in pixels of the main window of this extension.
* @param height          The default height in pixels of the main window of this extension.
* @param minWidth        The minimum width in pixels of the main window of this extension.
* @param minHeight       The minimum height in pixels of the main window of this extension.
* @param maxWidth        The maximum width in pixels of the main window of this extension.
* @param maxHeight       The maximum height in pixels of the main window of this extension.
* @param defaultExtensionDataXml The extension data contained in the default \c ExtensionDispatchInfo section of the extension manifest.
* @param specialExtensionDataXml The extension data contained in the application-specific \c ExtensionDispatchInfo section of the extension manifest.
* @param requiredRuntimeList     An array of \c Runtime objects for runtimes required by this extension.
* @param isAutoVisible       True if this extension is visible on loading.
* @param isPluginExtension   True if this extension has been deployed in the Plugins folder of the host application.
*/
export interface Extension {
  id: string
  name: string
  mainPath: string
  basePath: string
  windowType: string
  width: number
  height: number
  minWidth: number
  minHeight: number
  maxWidth: number
  maxHeight: number
  defaultExtensionDataXml: string
  specialExtensionDataXml: string
  requiredRuntimeList: string
  isAutoVisible: string
  isPluginExtension: string
}

/**
 * @class SystemPath
 * Stores operating-system-specific location constants for use in the
 * CSInterface.getSystemPath() method.
 */
export class SystemPath {
  /** The path to user data.  */
  public static readonly USER_DATA: string = 'userData'

  /** The path to common files for Adobe applications.  */
  public static readonly COMMON_FILES: string = 'commonFiles'

  /** The path to the user's default document folder.  */
  public static readonly MY_DOCUMENTS: string = 'myDocuments'

  /** @deprecated. Use SystemPath.Extension.  */
  public static readonly APPLICATION: string = 'application'

  /** The path to current extension.  */
  public static readonly EXTENSION: string = 'extension'

  /** The path to hosting application's executable.  */
  public static readonly HOST_APPLICATION: string = 'hostApplication'
}

/**
 * Class CSEvent.
 *
 * Initializes new instance of CSEvent object.
 * You can use it to dispatch a standard CEP event.
 *
 * @param type        Event type.
 * @param scope       The scope of event, can be "GLOBAL" or "APPLICATION".
 * @param appId       The unique identifier of the application that generated the event. Optional.
 * @param extensionId The unique identifier of the extension that generated the event. Optional.
 * @param data        Event-specific data. Optional.
 */
export interface CSEvent {
  type: string
  scope: string
  appId?: string
  extensionId?: string
  data?: string
}

/**
 * @class ColorType
 * Stores color-type constants.
 */
export class ColorType {
  /** RGB color type. */
  public static readonly RGB: string = 'rbg'

  /** Gradient color type. */
  public static readonly GRADIENT: string = 'gradient'

  /** Null color type. */
  public static readonly NONE: string = 'none'
}

/**
 * @class RGBColor
 *
 * @param red   The red value, in the range [0.0 to 255.0].
 * @param green The green value, in the range [0.0 to 255.0].
 * @param blue  The blue value, in the range [0.0 to 255.0].
 * @param alpha The alpha (transparency) value, in the range [0.0 to 255.0].
 *      The default, 255.0, means that the color is fully opaque.
 */
export interface RGBColor {
  red: number
  green: number
  blue: number
  alpha: number
}

/**
 * @class Direction
 * A point value  in which the y component is 0 and the x component
 * is positive or negative for a right or left direction,
 * or the x component is 0 and the y component is positive or negative for
 * an up or down direction.
 *
 * @param x     The horizontal component of the point.
 * @param y     The vertical component of the point.
 */
export interface Direction {
  x: number
  y: number
}

/**
 * Stores gradient stop information.
 *
 * @param offset   The offset of the gradient stop, in the range [0.0 to 1.0].
 * @param rgbColor The color of the gradient at this point, an RGBColor object.
 */
export interface GradientStop {
  offset: number
  rgbColor: RGBColor
}

/**
 * Stores gradient color information.
 *
 * @param type          The gradient type, must be "linear".
 * @param direction     A Direction object for the direction of the gradient
 (up, down, right, or left).
 * @param numStops          The number of stops in the gradient.
 * @param gradientStopList  An array of GradientStop objects.
 */
export interface GradientColor {
  type: string
  direction: Direction
  numStops: number
  arrGradientStop: GradientStop[]
}

/**
 * Stores color information, including the type, anti-alias level, and specific color
 * values in a color object of an appropriate type.
 *
 * @param type          The color type, 1 for "rgb" and 2 for "gradient".
 The supplied color object must correspond to this type.
 * @param antialiasLevel    The anti-alias level constant.
 * @param color         A RGBColor or GradientColor object containing specific color information.
 */
export interface UIColor {
  type?: number
  antialiasLevel?: any
  color?: RGBColor | GradientColor
}

/**
 * Stores window-skin properties, such as color and font. All color parameter values are UIColor objects except that systemHighlightColor is RGBColor object.
 *
 * @param baseFontFamily        The base font family of the application.
 * @param baseFontSize          The base font size of the application.
 * @param appBarBackgroundColor     The application bar background color.
 * @param panelBackgroundColor      The background color of the extension panel.
 * @param appBarBackgroundColorSRGB     The application bar background color, as sRGB.
 * @param panelBackgroundColorSRGB      The background color of the extension panel, as sRGB.
 * @param systemHighlightColor          The operating-system highlight color, as sRGB.
 */
export interface AppSkinInfo {
  baseFontFamily: string
  baseFontSize: number
  appBarBackgroundColor: UIColor
  panelBackgroundColor: UIColor
  appBarBackgroundColorSRGB: UIColor
  panelBackgroundColorSRGB: UIColor
  systemHighlightColor: UIColor
}

/**
 * Stores information about the environment in which the extension is loaded.
 *
 * @param appName   The application's name.
 * @param appVersion    The application's version.
 * @param appLocale The application's current license locale.
 * @param appUILocale   The application's current UI locale.
 * @param appId     The application's unique identifier.
 * @param isAppOnline  True if the application is currently online.
 * @param appSkinInfo   An AppSkinInfo object containing the application's default color and font styles.
 */
export interface HostEnvironment {
  appName: string
  appVersion: any
  appLocale: any
  appUILocale: any
  appId: string
  isAppOnline: boolean
  appSkinInfo: AppSkinInfo
}

/**
 * @interface HostCapabilities
 * Stores information about the host capabilities.
 *
 * @param EXTENDED_PANEL_MENU True if the application supports panel menu.
 * @param EXTENDED_PANEL_ICONS True if the application supports panel icon.
 * @param DELEGATE_APE_ENGINE True if the application supports delegated APE engine.
 * @param SUPPORT_HTML_EXTENSIONS True if the application supports HTML extensions.
 * @param DISABLE_FLASH_EXTENSIONS True if the application disables FLASH extensions.
 */
export interface HostCapabilities {
  EXTENDED_PANEL_MENU: boolean
  EXTENDED_PANEL_ICONS: boolean
  DELEGATE_APE_ENGINE: boolean
  SUPPORT_HTML_EXTENSIONS: boolean
  DISABLE_FLASH_EXTENSIONS: boolean
}

/**
 * @class ApiVersion
 * Stores current api version.
 *
 * Since 4.2.0
 *
 * @param major  The major version.
 * @param minor  The minor version.
 * @param micro  The micro version.
 */
export interface ApiVersion {
  major: number
  minor: number
  micro: number
}

/**
 * @class MenuItemStatus
 * Stores flyout menu item status
 *
 * Since 5.2.0
 *
 * @param menuItemLabel  The menu item label.
 * @param enabled        True if user wants to enable the menu item.
 * @param checked        True if user wants to check the menu item.
 */
export interface MenuItemStatus {
  menuItemLabel: string
  enabled: boolean
  checked: boolean
}

/**
 * @class ContextMenuItemStatus
 * Stores the status of the context menu item.
 *
 * Since 5.2.0
 *
 * @param menuItemID     The menu item id.
 * @param enabled        True if user wants to enable the menu item.
 * @param checked        True if user wants to check the menu item.
 */
export interface ContextMenuItemStatus {
  menuItemID: string
  enabled: boolean
  checked: boolean
}

export const THEME_COLOR_CHANGED_EVENT: string =
  'com.adobe.csxs.events.ThemeColorChanged'

/** Returns true if a cep environment is detected.
 */
export function inCEPEnvironment(): boolean {
  return !!window.cep || !!window.cep_node || !!window.__adobe_cep__
}

/** Retrieves information about the host environment in which the
 *  extension is currently running.
 *
 *   @return A HostEnvironment object.
 */
export function getHostEnvironment(): HostEnvironment {
  return JSON.parse(window.__adobe_cep__.getHostEnvironment())
}

/**
 * Registers an interest in a CEP event of a particular type, and
 * assigns an event handler.
 * The event infrastructure notifies your extension when events of this type occur,
 * passing the event object to the registered handler function.
 *
 * @param type     The name of the event type of interest.
 * @param listener The JavaScript handler function or method.
 * @param obj      Optional, the object containing the handler method, if any.
 *         Default is null.
 */
export function addEventListener(type: string, listener: Function, obj?: any) {
  window.__adobe_cep__.addEventListener(type, listener, obj)
}

/**
 * Removes a registered event listener.
 *
 * @param type      The name of the event type of interest.
 * @param listener  The JavaScript handler function or method that was registered.
 * @param obj       Optional, the object containing the handler method, if any.
 *          Default is null.
 */

export function removeEventListener(
  type: string,
  listener: Function,
  obj?: any
) {
  window.__adobe_cep__.removeEventListener(type, listener, obj)
}

/**
 * Retrieves the unique identifier of the application.
 * in which the extension is currently running.
 *
 * @return The unique ID string.
 */
export function getApplicationID(): string {
  const hostEnvironment = getHostEnvironment()
  const appId = hostEnvironment.appId
  return appId
}

/**
 * Retrieves host capability information for the application
 * in which the extension is currently running.
 *
 * @return A \c #HostCapabilities object.
 */
export function getHostCapabilities(): HostCapabilities {
  const hostCapabilities = JSON.parse(
    window.__adobe_cep__.getHostCapabilities()
  )
  return hostCapabilities
}

/**
 * Triggers a CEP event programmatically. Yoy can use it to dispatch
 * an event of a predefined type, or of a type you have defined.
 *
 * @param event A \c CSEvent object.
 */
export function dispatchEvent(event: CSEvent) {
  if (typeof event.data == 'object') {
    event.data = JSON.stringify(event.data)
  }

  window.__adobe_cep__.dispatchEvent(event)
}

/** Closes this extension. */
export function closeExtension() {
  window.__adobe_cep__.closeExtension()
}

/**
 * Loads and launches another extension, or activates the extension if it is already loaded.
 *
 * @param extensionId       The extension's unique identifier.
 * @param startupParams     Not currently used, pass "".
 *
 * @example
 * To launch the extension "help" with ID "HLP" from this extension, call:
 * <code>requestOpenExtension("HLP", ""); </code>
 *
 */
export function requestOpenExtension(extensionId: string, params: string) {
  window.__adobe_cep__.requestOpenExtension(extensionId, params)
}

/**
 * Retrieves the list of extensions currently loaded in the current host application.
 * The extension list is initialized once, and remains the same during the lifetime
 * of the CEP session.
 *
 * @param extensionIds  Optional, an array of unique identifiers for extensions of interest.
 *          If omitted, retrieves data for all extensions.
 *
 * @return Zero or more Extension objects.
 */
export function getExtensions(extensionIds: string[]): Extension[] {
  var extensionIdsStr = JSON.stringify(extensionIds)
  var extensionsStr = window.__adobe_cep__.getExtensions(extensionIdsStr)

  var extensions = JSON.parse(extensionsStr)
  return extensions
}

/**
 * Retrieves network-related preferences.
 *
 * @return A JavaScript object containing network preferences.
 */
export function getNetworkPreferences(): any {
  var result = window.__adobe_cep__.getNetworkPreferences()
  var networkPre = JSON.parse(result)

  return networkPre
}

/**
 * Retrieves the scale factor of screen.
 * On Windows platform, the value of scale factor might be different from operating system's scale factor,
 * since host application may use its self-defined scale factor.
 *
 * Since 4.2.0
 *
 * @return One of the following float number.
 *      <ul>\n
 *          <li> -1.0 when error occurs </li>\n
 *          <li> 1.0 means normal screen </li>\n
 *          <li> >1.0 means HiDPI screen </li>\n
 *      </ul>\n
 */
export function getScaleFactor() {
  return window.__adobe_cep__.getScaleFactor()
}

/**
 * Set a handler to detect any changes of scale factor. This only works on Mac.
 *
 * Since 4.2.0
 *
 * @param handler   The function to be called when scale factor is changed.
 *
 */
export function setScaleFactorChangedHandler(handler: Function) {
  window.__adobe_cep__.setScaleFactorChangedHandler(handler)
}

/**
 * Retrieves current API version.
 *
 * Since 4.2.0
 *
 * @return ApiVersion object.
 *
 */
export function getCurrentApiVersion(): ApiVersion {
  return JSON.parse(window.__adobe_cep__.getCurrentApiVersion())
}

/**
 * Set panel flyout menu by an XML.
 *
 * Since 5.2.0
 *
 * If user wants to be noticed when clicking an menu item, user needs to register "com.adobe.csxs.events.flyoutMenuClicked" Event by calling AddEventListener.
 * When an menu item is clicked, the event callback function will be called.
 * The "data" attribute of event is an object which contains "menuId" and "menuName" attributes.
 *
 * @param menu     A XML string which describes menu structure.
 * An example menu XML:
 * <Menu>
 *   <MenuItem Id="menuItemId1" Label="TestExample1" Enabled="true" Checked="false"/>
 *   <MenuItem Label="TestExample2">
 *     <MenuItem Label="TestExample2-1" >
 *       <MenuItem Label="TestExample2-1-1" Enabled="false" Checked="true"/>
 *     </MenuItem>
 *     <MenuItem Label="TestExample2-2" Enabled="true" Checked="true"/>
 *   </MenuItem>
 *   <MenuItem Label="---" />
 *   <MenuItem Label="TestExample3" Enabled="false" Checked="false"/>
 * </Menu>
 *
 */
export function setPanelFlyoutMenu(menu: string) {
  if ('string' != typeof menu) {
    return
  }

  window.__adobe_cep__.invokeSync('setPanelFlyoutMenu', menu)
}

/**
 * Updates a menu item in the extension window's flyout menu, by setting the enabled
 * and selection status.
 *
 * Since 5.2.0
 *
 * @param menuItemLabel The menu item label.
 * @param enabled       True to enable the item, false to disable it (gray it out).
 * @param checked       True to select the item, false to deselect it.
 *
 * @return false when the host application does not support this functionality (HostCapabilities.EXTENDED_PANEL_MENU is false).
 *         Fails silently if menu label is invalid.
 *
 * @see HostCapabilities.EXTENDED_PANEL_MENU
 */
export function updatePanelMenuItem(
  menuItemLabel: string,
  enabled: boolean,
  checked: boolean
) {
  var ret = false
  if (getHostCapabilities().EXTENDED_PANEL_MENU) {
    var itemStatus: MenuItemStatus = { menuItemLabel, enabled, checked }
    ret = window.__adobe_cep__.invokeSync(
      'updatePanelMenuItem',
      JSON.stringify(itemStatus)
    )
  }
  return ret
}

/**
 * Opens a page in the default system browser.
 *
 * Since 4.2.0
 *
 * @param url  The URL of the page/file to open, or the email address.
 * Must use HTTP/HTTPS/file/mailto protocol. For example:
 *   "http://www.adobe.com"
 *   "https://github.com"
 *   "file:///C:/log.txt"
 *   "mailto:test@adobe.com"
 *
 * @return One of these error codes:\n
 *      <ul>\n
 *          <li>NO_ERROR - 0</li>\n
 *          <li>ERR_UNKNOWN - 1</li>\n
 *          <li>ERR_INVALID_PARAMS - 2</li>\n
 *          <li>ERR_INVALID_URL - 201</li>\n
 *      </ul>\n
 */
export function openURLInDefaultBrowser(url: string): number {
  if (inCEPEnvironment()) {
    return window.cep.util.openURLInDefaultBrowser(url)
  } else {
    window.open(url)
    return 0
  }
}

/**
 * Retrieves extension ID.
 *
 * Since 4.2.0
 *
 * @return extension ID.
 */
export function getExtensionID(): string {
  return window.__adobe_cep__.getExtensionId()
}

/**
 * Get the visibility status of an extension window.
 *
 * Since 6.0.0
 *
 * @return true if the extension window is visible; false if the extension window is hidden.
 */
export function isWindowVisible(): boolean {
  return window.__adobe_cep__.invokeSync('isWindowVisible', '')
}

/**
 * Resize extension's content to the specified dimensions.
 * 1. Works with modal and modeless extensions in all Adobe products.
 * 2. Extension's manifest min/max size constraints apply and take precedence.
 * 3. For panel extensions
 *    3.1 This works in all Adobe products except:
 *        * Premiere Pro
 *        * Prelude
 *        * After Effects
 *    3.2 When the panel is in certain states (especially when being docked),
 *        it will not change to the desired dimensions even when the
 *        specified size satisfies min/max constraints.
 *
 * Since 6.0.0
 *
 * @param width  The new width
 * @param height The new height
 */
export function resizeContent(width: number, height: number) {
  window.__adobe_cep__.resizeContent(width, height)
}

/**
 * Register the invalid certificate callback for an extension.
 * This callback will be triggered when the extension tries to access the web site that contains the invalid certificate on the main frame.
 * But if the extension does not call this function and tries to access the web site containing the invalid certificate, a default error page will be shown.
 *
 * Since 6.1.0
 *
 * @param callback the callback function
 */
export function registerInvalidCertificateCallback(callback: Function) {
  return window.__adobe_cep__.registerInvalidCertificateCallback(callback)
}

/**
     * Register an interest in some key events to prevent them from being sent to the host application.
     *
     * This function works with modeless extensions and panel extensions.
     * Generally all the key events will be sent to the host application for these two extensions if the current focused element
     * is not text input or dropdown,
     * If you want to intercept some key events and want them to be handled in the extension, please call this function
     * in advance to prevent them being sent to the host application.
     *
     * Since 6.1.0
     *
     * @param keyEventsInterest      A JSON string describing those key events you are interested in. A null object or
     an empty string will lead to removing the interest
     *
     * This JSON string should be an array, each object has following keys:
     *
     * keyCode:  [Required] represents an OS system dependent virtual key code identifying
     *           the unmodified value of the pressed key.
     * ctrlKey:  [optional] a Boolean that indicates if the control key was pressed (true) or not (false) when the event occurred.
     * altKey:   [optional] a Boolean that indicates if the alt key was pressed (true) or not (false) when the event occurred.
     * shiftKey: [optional] a Boolean that indicates if the shift key was pressed (true) or not (false) when the event occurred.
     * metaKey:  [optional] (Mac Only) a Boolean that indicates if the Meta key was pressed (true) or not (false) when the event occurred.
     *                      On Macintosh keyboards, this is the command key. To detect Windows key on Windows, please use keyCode instead.
     * An example JSON string:
     *
     * [
     *     {
     *         "keyCode": 48
     *     },
     *     {
     *         "keyCode": 123,
     *         "ctrlKey": true
     *     },
     *     {
     *         "keyCode": 123,
     *         "ctrlKey": true,
     *         "metaKey": true
     *     }
     * ]
     *
     */
export function registerKeyEventsInterest(keyEventsInterest: string): any {
  return window.__adobe_cep__.registerKeyEventsInterest(keyEventsInterest)
}

/**
 * Set the title of the extension window.
 * This function works with modal and modeless extensions in all Adobe products, and panel extensions in Photoshop, InDesign, InCopy, Illustrator, Flash Pro and Dreamweaver.
 *
 * Since 6.1.0
 *
 * @param title The window title.
 */
export function setWindowTitle(title: string) {
  window.__adobe_cep__.invokeSync('setWindowTitle', title)
}

/**
 * Get the title of the extension window.
 * This function works with modal and modeless extensions in all Adobe products, and panel extensions in Photoshop, InDesign, InCopy, Illustrator, Flash Pro and Dreamweaver.
 *
 * Since 6.1.0
 *
 * @return The window title.
 */
export function getWindowTitle() {
  return window.__adobe_cep__.invokeSync('getWindowTitle', '')
}

/**
 * Initializes the resource bundle for this extension with property values
 * for the current application and locale.
 * To support multiple locales, you must define a property file for each locale,
 * containing keyed display-string values for that locale.
 * See localization documentation for Extension Builder and related products.
 *
 * Keys can be in the
 * form <code>key.value="localized string"</code>, for use in HTML text elements.
 * For example, in this input element, the localized \c key.value string is displayed
 * instead of the empty \c value string:
 *
 * <code><input type="submit" value="" data-locale="key"/></code>
 *
 * @return An object containing the resource bundle information.
 */
export function initResourceBundle() {
  var resourceBundle = JSON.parse(window.__adobe_cep__.initResourceBundle())
  var resElms = document.querySelectorAll('[data-locale]')
  for (var n = 0; n < resElms.length; n++) {
    var resEl = resElms[n]
    // Get the resource key from the element.
    var resKey = resEl.getAttribute('data-locale')
    if (resKey) {
      // Get all the resources that start with the key.
      for (var key in resourceBundle) {
        if (key.indexOf(resKey) === 0) {
          var resValue = resourceBundle[key]
          if (key.length == resKey.length) {
            resEl.innerHTML = resValue
          } else if ('.' == key.charAt(resKey.length)) {
            var attrKey = key.substring(resKey.length + 1)
            // @ts-ignore
            resEl[attrKey] = resValue
          }
        }
      }
    }
  }
  return resourceBundle
}

/**
 * Writes installation information to a file.
 *
 * @return The file path.
 */
export function dumpInstallationInfo(): string {
  return window.__adobe_cep__.dumpInstallationInfo()
}

/**
 * Retrieves version information for the current Operating System,
 * See http://www.useragentstring.com/pages/Chrome/ for Chrome \c navigator.userAgent values.
 *
 * @return A string containing the OS version, or "unknown Operation System".
 * If user customizes the User Agent by setting CEF command parameter "--user-agent", only
 * "Mac OS X" or "Windows" will be returned.
 */
export function getOSInformation(): string {
  var userAgent = navigator.userAgent

  if (navigator.platform == 'Win32' || navigator.platform == 'Windows') {
    var winVersion = 'Windows platform'
    if (userAgent.indexOf('Windows NT 5.0') > -1) {
      winVersion = 'Windows 2000'
    } else if (userAgent.indexOf('Windows NT 5.1') > -1) {
      winVersion = 'Windows XP'
    } else if (userAgent.indexOf('Windows NT 5.2') > -1) {
      winVersion = 'Windows Server 2003'
    } else if (userAgent.indexOf('Windows NT 6.0') > -1) {
      winVersion = 'Windows Vista'
    } else if (userAgent.indexOf('Windows NT 6.1') > -1) {
      winVersion = 'Windows 7'
    } else if (userAgent.indexOf('Windows NT 6.2') > -1) {
      winVersion = 'Windows 8'
    }

    var winBit = '32-bit'
    if (userAgent.indexOf('WOW64') > -1) {
      winBit = '64-bit'
    }

    return winVersion + ' ' + winBit
  } else if (
    navigator.platform == 'MacIntel' ||
    navigator.platform == 'Macintosh'
  ) {
    var agentStr = new String()
    agentStr = userAgent
    var verLength = agentStr.indexOf(')') - agentStr.indexOf('Mac OS X')
    var verStr = agentStr.substr(agentStr.indexOf('Mac OS X'), verLength)
    var result = verStr.replace('_', '.')
    result = result.replace('_', '.')
    return result
  }

  return 'Unknown Operation System'
}

/**
 * Retrieves a path for which a constant is defined in the system.
 *
 * @param pathType The path-type constant defined in SystemPath ,
 *
 * @return The platform-specific system path string.
 */
export function getSystemPath(pathType: string): string {
  var path = decodeURI(window.__adobe_cep__.getSystemPath(pathType))
  var OSVersion = getOSInformation()
  if (OSVersion.indexOf('Windows') >= 0) {
    path = path.replace('file:///', '')
  } else if (OSVersion.indexOf('Mac') >= 0) {
    path = path.replace('file://', '')
  }
  return path
}

/**
 * Set context menu by XML string.
 *
 * Since 5.2.0
 *
 * There are a number of conventions used to communicate what type of menu item to create and how it should be handled.
 * - an item without menu ID or menu name is disabled and is not shown.
 * - if the item name is "---" (three hyphens) then it is treated as a separator. The menu ID in this case will always be NULL.
 * - Checkable attribute takes precedence over Checked attribute.
 *
 * @param menu      A XML string which describes menu structure.
 * @param callback  The callback function which is called when a menu item is clicked. The only parameter is the returned ID of clicked menu item.
 *
 * An example menu XML:
 * <Menu>
 *   <MenuItem Id="menuItemId1" Label="TestExample1" Enabled="true" Checkable="true" Checked="false"/>
 *   <MenuItem Id="menuItemId2" Label="TestExample2">
 *     <MenuItem Id="menuItemId2-1" Label="TestExample2-1" >
 *       <MenuItem Id="menuItemId2-1-1" Label="TestExample2-1-1" Enabled="false" Checkable="true" Checked="true"/>
 *     </MenuItem>
 *     <MenuItem Id="menuItemId2-2" Label="TestExample2-2" Enabled="true" Checkable="true" Checked="true"/>
 *   </MenuItem>
 *   <MenuItem Label="---" />
 *   <MenuItem Id="menuItemId3" Label="TestExample3" Enabled="false" Checkable="true" Checked="false"/>
 * </Menu>
 */
export function setContextMenu(menu: string, callback: Function) {
  if ('string' != typeof menu) {
    return
  }

  window.__adobe_cep__.invokeAsync('setContextMenu', menu, callback)
}

/**
 * Set context menu by JSON string.
 *
 * Since 6.0.0
 *
 * There are a number of conventions used to communicate what type of menu item to create and how it should be handled.
 * - an item without menu ID or menu name is disabled and is not shown.
 * - if the item label is "---" (three hyphens) then it is treated as a separator. The menu ID in this case will always be NULL.
 * - Checkable attribute takes precedence over Checked attribute.
 * - a PNG icon. For optimal display results please supply a 16 x 16px icon as larger dimensions will increase the size of the menu item.
     The Chrome extension contextMenus API was taken as a reference.
 * - the items with icons and checkable items cannot coexist on the same menu level. The former take precedences over the latter.
     https://developer.chrome.com/extensions/contextMenus
 *
 * @param menu      A JSON string which describes menu structure.
 * @param callback  The callback function which is called when a menu item is clicked. The only parameter is the returned ID of clicked menu item.
 *
 * @description An example menu JSON:
 *
 * {
 *      "menu": [
 *          {
 *              "id": "menuItemId1",
 *              "label": "testExample1",
 *              "enabled": true,
 *              "checkable": true,
 *              "checked": false,
 *              "icon": "./image/small_16X16.png"
 *          },
 *          {
 *              "id": "menuItemId2",
 *              "label": "testExample2",
 *              "menu": [
 *                  {
 *                      "id": "menuItemId2-1",
 *                      "label": "testExample2-1",
 *                      "menu": [
 *                          {
 *                              "id": "menuItemId2-1-1",
 *                              "label": "testExample2-1-1",
 *                              "enabled": false,
 *                              "checkable": true,
 *                              "checked": true
 *                          }
 *                      ]
 *                  },
 *                  {
 *                      "id": "menuItemId2-2",
 *                      "label": "testExample2-2",
 *                      "enabled": true,
 *                      "checkable": true,
 *                      "checked": true
 *                  }
 *              ]
 *          },
 *          {
 *              "label": "---"
 *          },
 *          {
 *              "id": "menuItemId3",
 *              "label": "testExample3",
 *              "enabled": false,
 *              "checkable": true,
 *              "checked": false
 *          }
 *      ]
 *  }
 *
 */
export function setContextMenuByJSON(menu: string, callback: Function) {
  if ('string' != typeof menu) {
    return
  }

  window.__adobe_cep__.invokeAsync('setContextMenuByJSON', menu, callback)
}

/**
 * Updates a context menu item by setting the enabled and selection status.
 *
 * Since 5.2.0
 *
 * @param menuItemID    The menu item ID.
 * @param enabled       True to enable the item, false to disable it (gray it out).
 * @param checked       True to select the item, false to deselect it.
 */
export function updateContextMenuItem(
  menuItemID: string,
  enabled: boolean,
  checked: boolean
) {
  var itemStatus: ContextMenuItemStatus = { menuItemID, enabled, checked }
  return window.__adobe_cep__.invokeSync(
    'updateContextMenuItem',
    JSON.stringify(itemStatus)
  )
}
