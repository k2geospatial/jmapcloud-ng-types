/**
 * You can create a custom application panel throught the app extension mecanism.
 *
 * It offers a way to add your own panel, map interactor, redux store data, etc ...
 *
 * This way you can fully customize your JMap Cloud NG with your own code, written with your favourite dev tools.
 */
declare interface JAppExtension extends JCoreExtension {
  /**
   * The panel creation method.
   *
   * This is where you have to :
   *  - Create your panel UI
   *  - Add your listeners (like Redux subscribe)
   *  - ect ...
   *
   * This method is called each time the panel is :
   *  - Created : after a panel change
   *  - Displayed : after the panel is displayed after been hidden
   *
   * @param panelContainerId The html container id where you can insert your application.
   */
  onPanelCreation: (panelContainerId: string) => void
  /**
   * The panel destroy method.
   *
   * This is where you have to :
   *  - Destroy the panel UI (if not yet done).
   *  - Remove your listeners (like Redux unsubscribe)
   *  - etc ...
   *
   * This method is called each time the panel is :
   *  - Destroyed : after a panel change (panelContainerId div doesn't exist when called)
   *  - Hidden : when the panel is hidden (panelContainerId div still exist when called)
   *
   * @param panelContainerId The html container id where you can insert your application.
   */
  onPanelDestroy?: (panelContainerId: string) => void
  /**
   * The panel icon.
   *
   * An url (png, jpeg, svg, etc ...), a base 64 string or an svg tag as a string, as you like.
   * For an svg string a viewbox need to be specified for the icon to appear,
   * if no fill attribute is specified, the icon will follow the app theme.
   */
  panelIcon?: string
  /**
   * The panel icon tooltip.
   */
  panelTooltip?: string | JTranslationItem
  /**
   * The panel title.
   *
   * If provided, will create a header on top of the panel having
   * the same style of the others panels headers.
   */
  panelTitle?: string | JTranslationItem
  /**
   * Specify to omit the panel header if required.
   *
   * If set to true, NG will not display the panel header, including the extension's title. The extension developer is then responsible for displaying the extension's title inside its panel. The panel scrolling behaviour will also have to be handled by the developer.
   */
  omitPanelHeader?: boolean
  /**
   * An optional map interactor.
   *
   * See [[JMap.Service.Map.Interaction]] for more details.
   */
  interactor?: JMapInteractor
  /**
   * The panel registration method.
   *
   * This method is called each time the app extension is :
   *  - Registered, after the panel and interactors have been created
   *
   * Here you can perform actions after the registering of the extension.
   */
  onAppRegistrationDone?: () => void
}

declare interface JAppExtensionEventParams {
  extensionId: string
}
