declare namespace JMap {
  /**
   * **JMap.Application**
   *
   * This is the JMap Cloud NG API documentation.
   *
   * JMap Cloud NG depends on the JMap Cloud NG Core library ({@link JMap}).
   *
   * Examples are available <a href="https://doc.k2geospatial.com/jmap/doc/ng_dev/examples.html" target="_blank">here</a>.
   *
   * You can customize JMap Cloud NG by providing startup options ({@link JApplicationOptions}).
   */
  namespace Application {
    /**
     * **JMap.Application.getVersion**
     *
     * Returns the application build version.
     *
     * @example
     * ```ts
     * // return the build version, for example "1.0.1"
     * JMap.Application.getVersion()
     * ```
     */
    function getVersion(): string

    /**
     * **JMap.Application.getApiVersion**
     *
     * Returns the application API (Typescript interfaces) version.
     *
     * For the same API version, multiple implementation versions can exist.
     *
     * @example
     * ```ts
     * // return the build version, for example "1.0.1"
     * JMap.Application.getApiVersion()
     * ```
     */
    function getApiVersion(): string

    /**
     * **JMap.Application.openDocumentation**
     *
     * Opens JMap Cloud NG's online JS API documentation, in a new tab.
     *
     * @example
     * ```ts
     * // open JMap Cloud NG's online documentation, in a new tab
     * JMap.Application.openDocumentation()
     * ```
     */
    function openDocumentation(): void

    /**
     * **JMap.Application.openUserManual**
     *
     * Opens JMap Cloud NG's online user manual, in a new tab.
     *
     * @example
     * ```ts
     * // Open JMap Cloud NG's online user manual, in a new tab
     * JMap.Application.openUserManual()
     * ```
     */
    function openUserManual(): void

    /**
     * **JMap.Application.Annotation**
     *
     * You can manage everything related to annotations here.
     */
    namespace Annotation {
      /**
       * **JMap.Application.Annotation.getDrawMode**
       *
       * Returns the current draw mode.
       *
       * @example
       * ```ts
       * // return the current draw mode
       * JMap.Application.Annotation.getDrawMode()
       * ```
       */
      function getDrawMode(): JAPP_DRAW_MODES

      /**
       * **JMap.Application.Annotation.setDrawMode**
       *
       * Sets the annotation draw mode.
       *
       * @param drawMode the new draw mode
       * @example
       * ```ts
       * // Set the annotation draw mode to "draw"
       * JMap.Application.Annotation.setDrawMode("draw")
       * ```
       */
      function setDrawMode(drawMode: JAPP_DRAW_MODES): void

      /**
       * **JMap.Application.Annotation.getDrawType**
       *
       * Returns the current draw type.
       *
       * @example
       * ```ts
       * // return the current draw type
       * JMap.Application.Annotation.getDrawType()
       * ```
       */
      function getDrawType(): JAPP_DRAW_TYPES

      /**
       * **JMap.Application.Annotation.setDrawMode**
       *
       * Sets the annotation draw mode.
       *
       * @param drawType the new draw type
       * @example
       * ```ts
       * // Set the annotation draw mode to "draw"
       * JMap.Application.Annotation.setDrawMode("draw")
       * ```
       */
      function setDrawType(drawType: JAPP_DRAW_TYPES): void

      /**
       * **JMap.Application.Annotation.existsById**
       *
       * Returns true if annotation exists for the given id, else false
       *
       * @throws if the annotationId param is not a valid string
       * @param annotationId the given annotation id
       * @example
       * ```ts
       * // return true if annotation exists, else false
       * JMap.Application.Annotation.existsById("d68385b01be3c241c7b6298b2788839d")
       * ```
       */
      function existsById(annotationId: string): boolean

      /**
       * **JMap.Application.Annotation.getById**
       *
       * Returns the annotation for the given id.
       *
       * @throws if the annotationId param is not a valid string, or annotation is not found
       * @param annotationId the given annotation id
       * @example
       * ```ts
       * // return the annotation for the given id
       * JMap.Application.Annotation.getById("d68385b01be3c241c7b6298b2788839d")
       * ```
       */
      function getById(annotationId: string): JAppAnnotation

      /**
       * **JMap.Application.Annotation.getAll**
       *
       * Returns all annotations.
       *
       * @example
       * ```ts
       * // return all annotations
       * JMap.Application.Annotation.getAll()
       * ```
       */
      function getAll(): JAppAnnotation[]

      /**
       * **JMap.Application.Annotation.getSelectedIds**
       *
       * Returns the ids of the selected annotations.
       *
       * Empty array if no annotation is selected
       *
       * @example
       * ```ts
       * // return ids of selected annotations
       * JMap.Application.Annotation.getSelectedIds()
       * ```
       */
      function getSelectedIds(): string[]

      /**
       * **JMap.Application.Annotation.deleteAll**
       *
       * Deletes all annotations.
       *
       * Does nothing if no annotation exists.
       *
       * @example
       * ```ts
       * // Delete all annotations
       * JMap.Application.Annotation.deleteAll()
       * ```
       */
      function deleteAll(): void

      /**
       * **JMap.Application.Annotation.deleteByType**
       *
       * Deletes the annotations for the given type.
       *
       * Does nothing if no annotation exist for the type.
       *
       * @param annotationType the annotation type : "point", "polygon", "line_string", "rectangle", "circle", or "text"
       * @throws if the annotation type is not correct
       * @example
       * ```ts
       * // Delete all text annotations if exist
       * JMap.Application.Annotation.deleteByType("text")
       * ```
       */
      function deleteByType(annotationType: JAPP_DRAW_TYPES): void

      /**
       * **JMap.Application.Annotation.deleteByIds**
       *
       * Deletes the annotations for the given ids.
       *
       * @param annotationIds an array of annotation id
       * @throws if an annotation array is empty or an annotation is not found for the given ids.
       * @example
       * ```ts
       * // Delete two annotations
       * JMap.Application.Annotation.deleteByIds([
       *  "d68385b01be3c241c7b6298b2788839d",
       *  "98ef8ad4476f0e6fa26be416d58d0734"
       * ])
       * ```
       */
      function deleteByIds(annotationIds: string[]): void

      /**
       * **JMap.Application.Annotation.deleteSelected**
       *
       * Deletes the selected annotations.
       *
       * Does nothing if no selection.
       *
       * @example
       * ```ts
       * // Delete selected annotations
       * JMap.Application.Annotation.deleteSelected()
       * ```
       */
      function deleteSelected(): void

      /**
       * **JMap.Application.Annotation.getStyle**
       *
       * Returns the current style in use for annotation drawing.
       *
       * @example
       * ```ts
       * // return the current style in use for annotation drawing
       * JMap.Application.Annotation.getStyle()
       * ```
       */
      function getStyle(): JAppDrawStyle

      /**
       * **JMap.Application.Annotation.updateStyle**
       *
       * Updates annotation style, for the next annotations that will be drawn.
       *
       * Merges the new options with current one.
       *
       * @example
       * ```ts
       * // Set the line width as 3px
       * JMap.Application.Annotation.updateStyle({
       *  lineWidth: 3
       * })
       * ```
       */
      function updateStyle(style: JAppDrawStyle): void

      /**
       * **JMap.Application.Annotation.setStyleByAnnotationIds**
       *
       * For given ids, updates annotation style.
       *
       * @example
       * ```ts
       * const annotationIds = [
       *  "d68385b01be3c241c7b6298b2788839d",
       *  "98ef8ad4476f0e6fa26be416d58d0734"
       * ]
       *
       * const customStyle = {
       *  lineWidth: 3
       * }
       *
       * // Set custom style for 2 annotations
       * JMap.Application.Annotation.setStyleByAnnotationIds(annotationIds, customStyle)
       * ```
       */
      function setStyleByAnnotationIds(annotationIds: string[], style: JAppDrawStyle): void

      /**
       * **JMap.Application.Annotation.setPresetColors**
       *
       * Set the preset colors of color pickers using the given colors.
       * @param presetColors A array of preset hex colors
       * @throws if presetColors not an array, does not contain string or is too big
       * @example
       * ```ts
       * // Set the preset colors with 2 color
       * const presetColors = [
       *  "#29D1EA",
       *  "#D2FDDF"
       * ]
       *
       * JMap.Application.Annotation.setPresetColors(presetColors)
       * ```
       */
      function setPresetColors(presetColors: string[]): void

      /**
       * **JMap.Application.Annotation.addPresetColor**
       *
       * Add the given color to the preset colors of color pickers if not already present.
       *
       * @param presetColor A hex color
       * @throws if presetColor not an string or is empty
       * @example
       * ```ts
       * // Add the color #D2FDDF to the preset colors
       * const presetColor = "#D2FDDF"
       *
       * JMap.Application.Annotation.addPresetColor(presetColor)
       * ```
       */
      function addPresetColor(presetColor: string): void

      /**
       * **JMap.Application.Annotation.deletePresetColor**
       *
       * Delete the given color to the preset colors of color pickers if present.
       *
       * @param presetColor A hex color
       * @throws if presetColor not an string or is empty
       * @example
       * ```ts
       * // Delete the color #D2FDDF from the preset colors
       * const presetColor = "#D2FDDF"
       *
       * JMap.Application.Annotation.deletePresetColor(presetColor)
       * ```
       */
      function deletePresetColor(presetColor: string): void

      /**
       * **JMap.Application.Annotation.getPresetColors**
       *
       * Return the preset colors used by the application's color pickers.
       *
       * @example
       * ```ts
       * // Get the current preset colors
       * JMap.Application.Annotation.getPresetColors()
       * ```
       */
      function getPresetColors(): string[]

      /**
       * **JMap.Application.Annotation.setSnapEnabled**
       *
       * Enables or disables snap mode.
       *
       * @param isEnabled true to enable snap mode, false to disable
       * @throws if isEnabled is not a boolean
       * @example
       * ```ts
       * // enable snap mode
       * JMap.Application.Annotation.setSnapEnabled(true)
       * ```
       */
      function setSnapEnabled(isEnabled: boolean): void

      /**
       * **JMap.Application.Annotation.setSnapLayerId**
       *
       * set the layer id to snap on.
       *
       * @param layerId the JMap layer id
       * @throws if layer not found
       * @example
       * ```ts
       * // snap will target the features of the layer having id="36885146-7eed-4071-9f86-8e29c505af91"
       * JMap.Application.Annotation.setSnapLayerId("36885146-7eed-4071-9f86-8e29c505af91")
       * ```
       */
      function setSnapLayerId(layerId: JId): void
    }
    /**
     * **JMap.Application.Panel**
     *
     * You can manage UI panels (on the left in the screen) here.
     *
     * There is one diplayed and active panel at a time.
     */
    namespace Panel {
      /**
       * **JMap.Application.Panel.getActive**
       *
       * Returns the active panel.
       *
       * @example
       * ```ts
       * // return the currently active panel
       * JMap.Application.Panel.getActive()
       * ```
       */
      function getActive(): JAppPanel

      /**
       * **JMap.Application.Panel.getAll**
       *
       * Returns all application panels available.
       *
       * @example
       * ```ts
       * // return all available application panels
       * JMap.Application.Panel.getAll()
       * ```
       */
      function getAll(): JAppPanel[]

      /**
       * **JMap.Application.Panel.existById**
       *
       * Returns true if the panel exists for a given panel id.
       *
       * @param panelId The panel id to test
       * @example
       * ```ts
       * // return true if panel id="layer" exists
       * JMap.Application.Panel.existById("custom-panel")
       * ```
       */
      function existById(panelId: string): boolean

      /**
       * **JMap.Application.Panel.activateById**
       *
       * Changes the JMap Cloud NG panel.
       *
       * If no panelId is provided, will activate the "layer" panel by default, if the
       * "layer" panel is disabled will activate the first available panel.
       *
       * @throws if panel is not found
       * @param panelId The new application panel to activate
       * @param params optionnal parameters
       * @example
       * ```ts
       * // will activate and display the panel id="layer"
       * JMap.Application.Panel.activateById("layer")
       * ```
       */
      function activateById(panelId?: string, params?: JAppPanelActivationParams): void

      /**
       * **JMap.Application.Panel.deactivateCurrent**
       *
       * Deactivates the current panel, except if the current panel is the layer panel, or if there is only one panel available.
       *
       * @param params optionnal parameters
       * @example
       * ```ts
       * // will activate the current panel
       * JMap.Application.Panel.deactivateCurrent()
       * ```
       */
      function deactivateCurrent(params?: JAppPanelDeactivationParams): void

      /**
       * **JMap.Application.Panel.add**
       *
       * Adds a custom panel for a given panel definition to JMap Cloud NG.
       *
       * @throws if panel format is not correct
       * @param panel an object that is the definition of the new panel
       * @example
       * ```ts
       * const customPanelId = "custom-panel"
       * // will add the new panel, here an empty panel just for the example
       * JMap.Application.Panel.add({
       *   id: customPanelId,
       *   // Can be an image encoded as a base64 url or an svg tag as a string.
       *   // For an svg string a viewbox need to be specified for the icon to appear and if no fill attribute is specified, the icon will follow the app theme.
       *   icon: "http://url-to-my-image/custom-icon.png",
       *   iconTooltip: "My custom panel tooltip display when mouse is hover the icon",
       *   title: "Custom panel"
       * })
       * // The panel has been created but not displayed, if you want to display it:
       * JMap.Applcation.activate(customPanelId)
       * ```
       */
      function add(panel: JAppPanel): void

      /**
       * **JMap.Application.Panel.removeById**
       *
       * Removes a panel for a given panel id from JMap Cloud NG.
       *
       * If the panel was active, will activate the first panel the application finds.
       *
       * @throws if panel is not found or if this is the last panel
       * @param panelId The application panel id to remove
       * @example
       * ```ts
       * // will remove the "custom-panel" panel
       * JMap.Application.Panel.removeById("custom-panel")
       * ```
       */
      function removeById(panelId: string): void
    }

    /**
     * **JMap.Application.Feature**
     *
     * You can manage everything related to app features here.
     */
    namespace Feature {
      /**
       * **JMap.Application.Feature.openEditMenuById**
       *
       * Opens the feature edit menu for a single feature.
       *
       * @param layerId the JMap layer id
       * @param featureId the feature id
       * @example
       * ```ts
       * // open edit menu (single feature) for layer id=5, and feature id=234
       * JMap.Application.Feature.openEditMenuById(5, 234)
       * ```
       */
      function openEditMenuById(layerId: JId, featureId: JId): Promise<GeoJSON.Feature>

      /**
       * **JMap.Application.Feature.openEditMenuByIds**
       *
       * Opens the feature edit menu for multiple features.
       *
       * @param layerId the JMap layer id
       * @param featureIds an array of features ids
       * @example
       * ```ts
       * // open edit menu (multiple edition) for layer id=5, and features id=234, 452 and 176
       * JMap.Application.Feature.openEditMenuByIds(5, [234, 452, 176])
       * ```
       */
      function openEditMenuByIds(layerId: JId, featureIds: JId[]): Promise<GeoJSON.Feature[]>

      /**
       * **JMap.Application.Feature.closeEditMenu**
       *
       * Closes the feature edit menu if visible.
       *
       * If not visible, does nothing.
       *
       * @example
       * ```ts
       * // close the edit menu if visible
       * JMap.Application.Feature.closeEditMenu()
       * ```
       */
      function closeEditMenu(): void

      /**
       * **JMap.Application.Feature.deleteByIds**
       *
       * Deletes features (on the server), refreshes the layer on the map and displays a success or error message when done.
       *
       * @param layerId the JMap layer id
       * @param featureIds an array of features ids
       * @example
       * ```ts
       * // delete 2 features on layer id=4
       * JMap.Application.Feature.deleteByIds(4, [23, 76]).then(result => console.log("Delete result", result))
       * ```
       */
      function deleteByIds(layerId: JId, featureIds: JId[]): Promise<JId[]>
    }

    /**
     * **JMap.Application.Geometry**
     *
     * You can manage everything related to app geometry creation or update here.
     */
    namespace Geometry {
      /**
       * **JMap.Application.Geometry.openPanelForCreation**
       *
       * Opens the geometry panel in order to create a new feature.
       *
       * @throws if no layer is editable
       * @example
       * ```ts
       * // will open the geometry panel
       * JMap.Application.Geometry.openPanelForCreation()
       * ```
       */
      function openPanelForCreation(): void

      /**
       * **JMap.Application.Geometry.openPanelForUpdate**
       *
       * Opens the geometry panel in order to update a feature geometry.
       *
       * @throws if the given layer or feature are not editable
       * @param params function parameters
       * @example
       * ```ts
       * // will open the geometry panel in order to update the feature geometry
       * JMap.Application.Geometry.openPanelForUpdate()
       * ```
       */
      function openPanelForUpdate(params: JAppGeometryUpdateParams): void

      /**
       * **JMap.Application.Geometry.selectLayer**
       *
       * Selects the layer that will be used to create the geometry and the feature.
       *
       * @throws if layer not found
       * @param layerId The JMap layer id
       * @example
       * ```ts
       * // will select the layer id=3
       * JMap.Application.Geometry.selectLayer(3)
       * ```
       */
      function selectLayer(layerId: JId): void

      /**
       * **JMap.Application.Geometry.startCreationDrawing**
       *
       * Enables drawing of the geometry on the map.
       *
       * @throws if no layer is selected
       * @example
       * ```ts
       * // enable drawing of the geometry on the map
       * JMap.Application.Geometry.startCreationDrawing()
       * ```
       */
      function startCreationDrawing(): void

      /**
       * **JMap.Application.Geometry.stopCreationDrawing**
       *
       * Stops the geometry creation, when drawing on the map, and displays the layer selection panel.
       *
       * @example
       * ```ts
       * // stop drawing the geometry on the map
       * JMap.Application.Geometry.stopCreationDrawing()
       * ```
       */
      function stopCreationDrawing(): void

      /**
       * **JMap.Application.Geometry.finishCreate**
       *
       * Finishes geometry creation.
       *
       * @throws if panel is not in creation mode, or if geometry has not yet been created.
       * @example
       * ```ts
       * // finishe creating or updating the geometry
       * JMap.Application.Geometry.finishCreate()
       * ```
       */
      function finishCreate(): void

      /**
       * **JMap.Application.Geometry.finishUpdate**
       *
       * Finishes geometry update.
       *
       * @throws if panel is not in update mode
       * @example
       * ```ts
       * // finishe updating the geometry
       * JMap.Application.Geometry.finishUpdate()
       * ```
       */
      function finishUpdate(): Promise<void>

      /**
       * **JMap.Application.Geometry.closePanel**
       *
       * Closes the geometry creation or update panel without confirmation message.
       *
       * @example
       * ```ts
       * // close the geometry panel
       * JMap.Application.Geometry.closePanel()
       * ```
       */
      function closePanel(): void

      /**
       * **JMap.Application.Geometry.setSnapEnabled**
       *
       * Enables or disables snap mode.
       *
       * @param isEnabled true to enable snap mode, false to disable
       * @throws if isEnabled is not a boolean
       * @example
       * ```ts
       * // enable snap mode
       * JMap.Application.Geometry.setSnapEnabled(true)
       * ```
       */
      function setSnapEnabled(isEnabled: boolean): void

      /**
       * **JMap.Application.Geometry.setSnapLayerId**
       *
       * set the layer id to snap on.
       *
       * @param layerId the JMap layer id
       * @throws if layer not found
       * @example
       * ```ts
       * // snap will target the features of the layer having id="36885146-7eed-4071-9f86-8e29c505af91"
       * JMap.Application.Geometry.setSnapLayerId("36885146-7eed-4071-9f86-8e29c505af91")
       * ```
       */
      function setSnapLayerId(layerId: JId): void
    }

    /**
     * **JMap.Application.Selection**
     *
     * You can manage the application measure tools here.
     */
    namespace Measure {
      /**
       * **JMap.Application.Measure.getAll**
       *
       * Returns all measures.
       *
       * @example
       * ```ts
       * // return currently drawn measures
       * JMap.Application.Measure.getAll()
       * ```
       */
      function getAll(): JAppMeasure[]

      /**
       * **JMap.Application.Measure.existsById**
       *
       * Returns true if a measure exists for the given id, else false.
       *
       * @throws Error if measureId is not a string or an empty string
       * @example
       * ```ts
       * // return true if the measure exists, else false
       * JMap.Application.Measure.existsById("ac57b1bd83ca6d8e0013e4cf9f06847e")
       *
       * // throws an error
       * JMap.Application.Measure.existsById("")
       *
       * // throws an error
       * JMap.Application.Measure.existsById()
       * ```
       */
      function existsById(measureId: string): boolean

      /**
       * **JMap.Application.Measure.getById**
       *
       * Returns the measure for the given id.
       *
       * @throws Error if measureId is not a string or an empty string, or if measure is not found
       * @example
       * ```ts
       * // return the measure for the given id
       * JMap.Application.Measure.getById("ac57b1bd83ca6d8e0013e4cf9f06847e")
       *
       * // throws an error
       * JMap.Application.Measure.getById("")
       *
       * // throws an error
       * JMap.Application.Measure.getById()
       * ```
       */
      function getById(measureId: string): JAppMeasure

      /**
       * **JMap.Application.Measure.getAllLineMeasures**
       *
       * Returns all "line" measures. Result contains no polygon or circle measures.
       *
       * @example
       * ```ts
       * // return all line measures
       * JMap.Application.Measure.getAllLineMeasures()
       * ```
       */
      function getAllLineMeasures(): JAppMeasure[]

      /**
       * **JMap.Application.Measure.getAllPolygonMeasures**
       *
       * Returns all "polygon" measures. Result contains no line or circle measures.
       *
       * @example
       * ```ts
       * // return all polygon measures
       * JMap.Application.Measure.getAllPolygonMeasures()
       * ```
       */
      function getAllPolygonMeasures(): JAppMeasure[]

      /**
       * **JMap.Application.Measure.getAllCircleMeasures**
       *
       * Returns all "circle" measures. Result contains no line or polygon measures.
       *
       * @example
       * ```ts
       * // return all circle measures
       * JMap.Application.Measure.getAllCircleMeasures()
       * ```
       */
      function getAllCircleMeasures(): JAppMeasure[]

      /**
       * **JMap.Application.Measure.setAllMeasures**
       *
       * Resets measures with provided measures.
       *
       * @example
       * ```ts
       * // remove all measures
       * JMap.Application.Measure.setAllMeasures([])
       * ```
       */
      function setAllMeasures(measures: JAppMeasure[]): void

      /**
       * **JMap.Application.Measure.activateMeasureType**
       *
       * Activates a measure type for the drawing measurement tool.
       * @param measureType The new measure type to apply
       * @example
       * ```ts
       * // change the measure type to length
       * JMap.Application.Measure.activateMeasureType("length")
       * ```
       */
      function activateMeasureType(measureType: JAPP_MEASURE_TYPES): void

      /**
       * **JMap.Application.Measure.getActiveMeasureType**
       *
       * Returns the current active measure type.
       *
       * @example
       * ```ts
       * // return active mesure type
       * JMap.Application.Measure.getActiveMeasureType([])
       * ```
       */
      function getActiveMeasureType(): JAPP_MEASURE_TYPES

      /**
       * **JMap.Application.Measure.getSelectedIds**
       *
       * Returns the current measure selection.
       *
       * @example
       * ```ts
       * // return current measure selection
       * JMap.Application.Measure.getSelectedIds([])
       * ```
       */
      function getSelectedIds(): string[]

      /**
       * **JMap.Application.Measure.setSelectionActive**
       *
       * Activates or deactivates the measurement selection mode.
       *
       * If active, measures can be selected by clicking on the map (then changed or removed).
       *
       * @param isSelectionActive true to activate selection mode, false to deactivate
       * @example
       * ```ts
       * // activate selection of measures
       * JMap.Application.Measure.setSelectionActive(true)
       *
       * // deactivate selection of measure
       * JMap.Application.Measure.setSelectionActive(false)
       * ```
       */
      function setSelectionActive(isSelectionActive: boolean): void

      /**
       * **JMap.Application.Measure.deleteAll**
       *
       * Deletes all measures.
       *
       * Returns deleted measure count.
       *
       * @example
       * ```ts
       * // delete all measures
       * const deletedMeasuresCount = JMap.Application.Measure.deleteAll()
       * ```
       */
      function deleteAll(): number

      /**
       * **JMap.Application.Measure.deleteSelected**
       *
       * Deletes all selected measures.
       *
       * Returns deleted measure count.
       *
       * @example
       * ```ts
       * // delete all selected measures
       * const deletedMeasuresCount = JMap.Application.Measure.deleteSelected()
       * ```
       */
      function deleteSelected(): number

      /**
       * **JMap.Application.Measure.deleteMeasuresById**
       *
       * Deletes a measure for a given id.
       *
       * @throws if measure is not found
       * @param measureIds list of measure ids
       * @example
       * ```ts
       * // delete measure having id="bc4fc07f2e84eb50f5962d3d41c836cb"
       * const deletedMeasuresCount = JMap.Application.Measure.deleteMeasuresById("bc4fc07f2e84eb50f5962d3d41c836cb")
       * ```
       */
      function deleteMeasuresById(measureIds: string[]): number

      /**
       * **JMap.Application.Measure.deleteAllLines**
       *
       * Deletes all measures having type === "line_string".
       *
       * Returns deleted measure count.
       *
       * @example
       * ```ts
       * // delete all line measures (if exist)
       * const deletedMeasuresCount = JMap.Application.Measure.deleteAllLines()
       * ```
       */
      function deleteAllLines(): number

      /**
       * **JMap.Application.Measure.deleteAllPolygons**
       *
       * Deletes all measures having type === "polygon".
       *
       * Returns deleted measure count.
       *
       * @example
       * ```ts
       * // delete all polygon measures (if exist)
       * const deletedMeasuresCount = JMap.Application.Measure.deleteAllPolygons()
       * ```
       */
      function deleteAllPolygons(): number

      /**
       * **JMap.Application.Measure.deleteAllCircles**
       *
       * Deletes all measures having type === "circle".
       *
       * Returns deleted measure count.
       *
       * @example
       * ```ts
       * // delete all circle measures (if exist)
       * const deletedMeasuresCount = JMap.Application.Measure.deleteAllCircles()
       * ```
       */
      function deleteAllCircles(): number

      /**
       * **JMap.Application.Measure.getMeasurementSystem**
       *
       * Returns the current measurement system used by the Measurements Panel
       *
       * @example
       * ```ts
       * // get the current measurement system
       * console.log(JMap.Application.Measure.getMeasurementSystem())
       * // "geodetic"
       * ```
       */
      function getMeasurementSystem(): JAPP_MEASUREMENT_SYSTEMS

      /**
       * **JMap.Application.Measure.setMeasurementSystem**
       *
       * Sets the measurement system used by the Measurements Panel. **This setting is only taken into account when you draw measurements using the Measurements Panel. It does not affect jmapcloud-ng-core methods like {@link JMap.Geometry.getDistance}, which always return geodetic values.**
       *
       * **This method should not be called in regular situations.**
       *
       * Default measurement system is "geodetic", meaning that all measurements are representative of the length or area of features on the surface of the Earth. This is what is normally desired.
       *
       * In some rare situations, someone may want to get the length or area of measurements in the map's projection plane (EPSG:3857 - WGS 84 / Pseudo-Mercator). In this case, they can set the measurement system to "planar".
       *
       * Be warned that lengths or areas in planar context are not representative of the real dimensions on the earth's surface. The only supported planar projection for measurements is EPSG:3857.
       *
       * @param measurementSystem "geodetic" (default) or "planar"
       * @example
       * ```ts
       * // set the current measurement system to "geodetic"
       * JMap.Application.Measure.setMeasurementSystem("geodetic")
       * ```
       */
      function setMeasurementSystem(measurementSystem: JAPP_MEASUREMENT_SYSTEMS): void

      /**
       * **JMap.Application.Measure.setSnapEnabled**
       *
       * Enables or disables snap mode.
       *
       * @param isEnabled true to enable snap mode, false to disable
       * @throws if isEnabled is not a boolean
       * @example
       * ```ts
       * // enable snap mode
       * JMap.Application.Measure.setSnapEnabled(true)
       * ```
       */
      function setSnapEnabled(isEnabled: boolean): void

      /**
       * **JMap.Application.Measure.setSnapLayerId**
       *
       * set the layer id to snap on.
       *
       * @param layerId the JMap layer id
       * @throws if layer not found
       * @example
       * ```ts
       * // snap will target the features of the layer having id="36885146-7eed-4071-9f86-8e29c505af91"
       * JMap.Application.Measure.setSnapLayerId("36885146-7eed-4071-9f86-8e29c505af91")
       * ```
       */
      function setSnapLayerId(layerId: JId): void
    }

    /**
     * **JMap.Application.Selection**
     *
     * You can manage the application selection tools here.
     */
    namespace Selection {
      /**
       * **JMap.Application.Selection.getDisplayedLayerId**
       *
       * The selection of only one layer can be diplayed at a time.
       *
       * This function returns the id of the layer for which the selection is displayed.
       *
       * @example
       * ```ts
       * // return the layer id of the displayed selection
       * JMap.Application.Selection.getDisplayedLayerId()
       * ```
       */
      function getDisplayedLayerId(): JId

      /**
       * **JMap.Application.Selection.setDisplayedLayerId**
       *
       * Displays the selection of the layer.
       *
       * If layer selection has no selection, hides the layer selection list.
       *
       * @throws if layer not found for the given layer id
       * @example
       * ```ts
       * // display the layer id=2 selection
       * JMap.Application.Selection.setDisplayedLayerId(2)
       * ```
       */
      function setDisplayedLayerId(layerId: JId): void

      /**
       * **JMap.Application.Selection.activateSelectionType**
       *
       * Changes the current type of selection
       * @param selectionType The new selection type to apply
       * @example
       * ```ts
       * // change the selection type to rectangle
       * JMap.Application.Selection.activateSelectionType("rectangle")
       * ```
       */
      function activateSelectionType(selectionType: JAPP_SELECTION_TYPES): void

      /**
       * **JMap.Application.Selection.getActiveSelectionType**
       *
       * Returns the current active type of selection
       *
       * @example
       * ```ts
       * // return the current active selection type
       * JMap.Application.Selection.getActiveSelectionType()
       * ```
       */
      function getActiveSelectionType(): JAPP_SELECTION_TYPES

      /**
       * **JMap.Application.Selection.getTableVisibility**
       *
       * Returns true if the selection data table is diaplayed.
       *
       * @example
       * ```ts
       * // return true if the selection data table is visible
       * JMap.Application.Selection.getTableVisibility()
       * ```
       */
      function getTableVisibility(): boolean

      /**
       * **JMap.Application.Selection.getTableVisibility**
       *
       * Hides or shows the selection data table.
       *
       * @example
       * ```ts
       * // make selection data table visible
       * JMap.Application.Selection.setTableVisibility(true)
       *
       * // make selection data table not visible
       * JMap.Application.Selection.setTableVisibility(false)
       * ```
       */
      function setTableVisibility(tableVisibility: boolean): void

      /**
       * **JMap.Application.Selection.isTableDisplayedInTab**
       *
       * Returns true if the selection table is displayed in an external browser tab.
       *
       * @example
       * ```ts
       * // returns true if the selection table is displayed in an external browser tab.
       * JMap.Application.Selection.isTableDisplayedInTab()
       * ```
       */
      function isTableDisplayedInTab(): boolean

      /**
       * **JMap.Application.Selection.openTableInTab**
       *
       * Displays the selection table in another tab.
       *
       * If the table is not visible, make it visible.
       *
       * @example
       * ```ts
       * // displays the selection table in another tab.
       * JMap.Application.Selection.openTableInTab()
       * ```
       */
      function openTableInTab(): void

      /**
       * **JMap.Application.Selection.closeTableTab**
       *
       * Closes the selection table tab.
       *
       * If the table is not visible, or not opened in another tab, do nothing.
       *
       * If the table is opened in another tab, close the tab and display the table over the map.
       *
       * @example
       * ```ts
       * // closes the selection table tab.
       * JMap.Application.Selection.closeTableTab()
       * ```
       */
      function closeTableTab(): void

      /**
       * **JMap.Application.Selection.clearSelectionForLayer**
       *
       * Unselects all features for a given layer id.
       *
       * @param layerId the JMap layer id
       * @example
       * ```ts
       * // clear the layer id=2 selection
       * JMap.Application.Selection.clearSelectionForLayer(2)
       * ```
       */
      function clearSelectionForLayer(layerId: JId): void

      /**
       * **JMap.Application.Selection.clearSelection**
       *
       * Clears the current selection
       *
       * @example
       * ```ts
       * // Clear the current selection
       * JMap.Application.Selection.clearSelection()
       * ```
       */
      function clearSelection(): void

      /**
       * **JMap.Application.Selection.selectFromFeature**
       *
       * Selects features on the map that intersect the given feature.
       *
       * @param feature the given feature
       * @param selectionType if not provided the method use
       * @example
       * ```ts
       * // will select all features that intersect the provided line feature
       * JMap.Application.Selection.selectFromFeature(lineFeature)
       * ```
       */
      function selectFromFeature(feature: GeoJSON.Feature, selectionType: JAPP_SELECTION_TYPES): void

      /**
       * **JMap.Application.Selection.exportAsExcelFile**
       *
       * Exports the current selection as an excel file.
       *
       * If no selection, export an empty file.
       *
       * @example
       * ```ts
       * // download the current selection as an excel file
       * JMap.Application.Selection.exportAsExcelFile()
       * ```
       */
      function exportAsExcelFile(): void

      /**
       * **JMap.Application.Selection.fitMapToDisplayLayerSelection**
       *
       * Pans and zooms the map to display the current selection.
       *
       * @param options optional options
       * @example
       * ```ts
       * // fit the map to display selected features
       * JMap.Application.Selection.fitMapToDisplayLayerSelection()
       * ```
       */
      function fitMapToDisplayLayerSelection(options?: JPanAndZoomOptions): void
    }

    /**
     * **JMap.Application.Project**
     *
     * You can manage all things related to JMap Cloud NG Core project and JMap Cloud NG here.
     */
    namespace Project {
      /**
       * **JMap.Application.Project.activateById**
       *
       * Activate the project for a given project id.
       *
       * If you use JMap Cloud NG, use this function instaed of JMap.Project.activateById.
       *
       * This function does the same as JMap.Project.activateById but also manages things for the application UI.
       *
       * @throws if project id invalid or project not found
       * @param projectId the JMap project id
       * @returns the project
       * @example
       * ```ts
       * // activate project id=33
       * JMap.Application.Project.activateById(33)
       * ```
       */
      function activateById(projectId: JId): JProject

      /**
       * **JMap.Application.Project.setSelectionPanelVisibility**
       *
       * Displays or hides the project list selection panel.
       *
       * @example
       * ```ts
       * // display the project list selection panel
       * JMap.Application.Project.setSelectionPanelVisibility(true)
       * ```
       */
      function setSelectionPanelVisibility(isVisible: boolean): void
    }

    /**
     * **JMap.Application.Layer**
     *
     * You can manage the layer panel here.
     */
    namespace Layer {
      /**
       * **JMap.Application.Layer.Tree**
       *
       * You can manage the layer panel tree view here.
       */
      namespace Tree {
        /**
         * **JMap.Application.Layer.Tree.Filter**
         *
         * You can manage the layer panel tree view filtering here.
         */
        namespace Filter {
          /**
           * **JMap.Application.Layer.Tree.Filter.setName**
           *
           * Sets the name filter. Name filter needs to have at least 2 characters to be applied.
           *
           * Panel layer will show only layers whose name matches the name filter. The name filter is case-insensitive and
           * diacritical characters insensitive.
           *
           * @param nameFilter the name filter to apply
           * @example
           * ```ts
           * // In the layer panel will display only layers whose name matches "pro" (case-insensitive)
           * JMap.Application.Layer.setName("pro")
           * ```
           */
          function setName(nameFilter: string): void

          /**
           * **JMap.Application.Layer.Tree.Filter.isApplied**
           *
           * Tests if the layer tree filters are applied.
           *
           * Layer tree filters are applied (in action) only if the filtering is active ({@link JMap.Application.Layer.Tree.Filter.isActive} returns true)
           * and either one of those two conditions are met:
           *
           * a) the name filter contains at least 2 characters
           * b) one of the layer filters has been added to the filtering configuration
           *
           * @example
           * ```ts
           * // filter configuration is initially empty
           *
           * // activate the filters
           * JMap.Application.Layer.Tree.Filter.setActive(true)
           *
           * // set the name filter to "a"
           * JMap.Application.Layer.Tree.Filter.setName("a")
           *
           * // will return false
           * const isFilterApplied = JMap.Application.Layer.Tree.Filter.isApplied()
           * ```
           */
          function isApplied(): boolean

          /**
           * **JMap.Application.Layer.Tree.Filter.isActive**
           *
           * Tests if the layer tree filters are active.
           *
           * Layer tree filters are active, but initially not applied, when the user activates the Filter user interface either by clicking on a button
           * or by calling a JMap Cloud NG API method to activate it.
           * See {@link JMap.Application.Layer.Tree.Filter.isApplied} for more details.
           *
           * @example
           * ```ts
           * // activate the filters
           * JMap.Application.Layer.Tree.Filter.setActive(false)
           *
           * // will return false
           * JMap.Application.Layer.Tree.Filter.isActive()
           * ```
           */
          function isActive(): boolean

          /**
           * **JMap.Application.Layer.Tree.Filter.setActive**
           *
           * Tests if the layer tree filters are active.
           *
           * Layer tree filters are active, but initially not applied, when the user activates the Filter user interface either by clicking on a button
           * or by calling a JMap Cloud NG API method to activate it.
           * See {@link JMap.Application.Layer.Tree.Filter.isApplied} for more details
           *
           * @param active a boolean
           * @example
           * ```ts
           * // activate the filters
           * JMap.Application.Layer.Tree.Filter.setActive(false)
           *
           * // will return false
           * JMap.Application.Layer.Tree.Filter.isActive()
           * ```
           */
          function setActive(active: boolean): void

          /**
           * **JMap.Application.Layer.Tree.Filter.applyToMap**
           *
           * Applies the current filter configuration on the map. All layers not matching the filter will be hidden, and only those
           * that match the filter will stay visible on the map. If no filter is defined (or appliable), no change is applied on the map.
           *
           * @example
           * ```ts
           * // Apply the current filter
           * JMap.Application.Layer.Tree.Filter.applyToMap()
           * ```
           */
          function applyToMap(): void

          /**
           * **JMap.Application.Layer.Tree.Filter.existById**
           *
           * Tests if the specified filter exists.
           *
           * @param filterId the filter id
           * @example
           * ```ts
           * // create a filter
           * JMap.Application.Layer.Tree.Filter.add({
           *  1,
           *  metadataItemId: 0,
           *  type: "date",
           *  operator: "between",
           *  value: [new Date("2021-06-02T00:00:00"),new Date("2021-06-22:T00:00:00")]
           * })
           *
           * // will return true
           * JMap.Application.Layer.Tree.Filter.existById(1)
           * ```
           */
          function existById(filterId: number): boolean

          /**
           * **JMap.Application.Layer.Tree.Filter.oneFilterExistForMetadataId**
           *
           * Tests if at least one filter associated with the specified metadata id exists.
           *
           * @param metadataId the metadata id
           * @example
           * ```ts
           * // filter collection is initially empty
           *
           * // create a filter
           * JMap.Application.Layer.Tree.Filter.add({
           *  1,
           *  metadataItemId: 0,
           *  type: "date",
           *  operator: "between",
           *  value: [new Date("2021-06-02T00:00:00"),new Date("2021-06-22:T00:00:00")]
           * })
           *
           * // will return false
           * JMap.Application.Layer.Tree.Filter.oneFilterExistForMetadataId(6)
           * ```
           */
          function oneFilterExistForMetadataId(metadataId: JId): boolean

          /**
           * **JMap.Application.Layer.Tree.Filter.getAll**
           *
           * Returns an object containing the current name filter and an array of all current filters.
           *
           * @example
           * ```ts
           * // get filters configuration
           * console.log(JMap.Application.Layer.Tree.Filter.getAll())
           * // {
           * //   "nameFilter":"Mont",
           * //   "filters":[
           * //     {"id":1,
           * //       "metadataItemId":0,
           * //       "operator":"between",
           * //       "type":"date",
           * //       "value":[
           * //       "2021-06-01T10:25:00.000Z",
           * //       "2021-06-22T10:25:00.000Z"
           * //       ]
           * //     }
           * //   ]
           * // }
           * ```
           */
          function getAll(): JAppGetAllFiltersResult

          /**
           * **JMap.Application.Layer.Tree.Filter.getById**
           *
           * Retrieves the specified filter by id.
           *
           * @param filterId the filter id
           * @example
           * ```ts
           * // get filter id=1
           * JMap.Application.Layer.Tree.Filter.getById(1)
           * // {"id":1,
           * //   "metadataItemId":0,
           * //   "operator":"between",
           * //   "type":"date",
           * //   "value":[
           * //     "2021-06-01T10:25:00.000Z",
           * //     "2021-06-22T10:25:00.000Z"
           * //   ]
           * // }
           * ```
           */
          function getById(filterId: number): JAppAnyLayerFilter

          /**
           * **JMap.Application.Layer.Tree.Filter.add**
           *
           * Adds a filter. The list of available metadata schema items can be retieved by calling {@link JMap.Layer.getMetadataSchema}.
           *
           * @param filter a JAppAnyLayerFilter object
           * @example
           * ```ts
           * // add a filter to the config
           * JMap.Application.Layer.Tree.Filter.add({
           *  1,
           *  metadataItemId: 0,
           *  type: "date",
           *  operator: "between",
           *  value: [new Date("2021-06-02T00:00:00"),new Date("2021-06-22:T00:00:00")]
           * })
           * ```
           */
          function add(filter: JAppAnyLayerFilter): JAppAnyLayerFilter

          /**
           * **JMap.Application.Layer.Tree.Filter.deleteById**
           *
           * Removes the specified filter from the filter configuration.
           *
           * @param filterId the id of the filter to delete
           * @example
           * ```ts
           * // delete filter id=1
           * JMap.Application.Layer.Tree.Filter.deleteById(1)
           * ```
           */
          function deleteById(filterId: number): JAppAnyLayerFilter

          /**
           * **JMap.Application.Layer.Tree.Filter.openAddFilterDialog**
           *
           * Opens the Add Filter dialog box, and activates the Layer panel if it is not already active.
           *
           * @example
           * ```ts
           * // open Add Filter UI
           * JMap.Application.Layer.Tree.Filter.openAddFilterDialog()
           * ```
           */
          function openAddFilterDialog(): void

          /**
           * **JMap.Application.Layer.Tree.Filter.closeAddFilterDialog**
           *
           * Closes the Add Filter dialog box (without saving the filter).
           *
           * @example
           * ```ts
           * // close Add Filter UI
           * JMap.Application.Layer.Tree.Filter.closeAddFilterDialog()
           * ```
           */
          function closeAddFilterDialog(): void
        }
      }

      /**
       * **JMap.Application.Layer.Edition**
       *
       * You can manage the layer edition panel here.
       */
      namespace Edition {
        /**
         * **JMap.Application.Layer.Edition.DynamicFilter**
         *
         * You can manage layer dynamic filter panel and dialog here.
         */
        namespace DynamicFilter {
          /**
           * **JMap.Application.Layer.Edition.DynamicFilter.openPanel**
           *
           * Opens the edition panel, with the "dynamic-filter" tab activated, for the given layer
           *
           * @throws if layer not found
           * @param layerId the JMap layer id
           * @example
           * ```ts
           * // opens the edition panel, with the "dynamic-filter" tab activated, for layer id=3.
           * JMap.Application.Layer.Edition.DynamicFilter.openPanel(3)
           * ```
           */
          function openPanel(layerId: JId): void

          /**
           * **JMap.Application.Layer.Edition.DynamicFilter.closePanel**
           *
           * If open, closes the edition panel.
           *
           * @example
           * ```ts
           * // closes the dynamic filter panel if open.
           * JMap.Application.Layer.Edition.DynamicFilter.closePanel()
           * ```
           */
          function closePanel(): void

          /**
           * **JMap.Application.Layer.Edition.DynamicFilter.openCreateDialog**
           *
           * Opens the dynamic filter creation dialog for the given layer id.
           *
           * @throws if layer not found
           * @param layerId the JMap layer id
           * @example
           * ```ts
           * // opens the dynamic filter creation dialog for layer id=3
           * JMap.Application.Layer.Edition.DynamicFilter.openCreateDialog(3)
           * ```
           */
          function openCreateDialog(layerId: JId): void

          /**
           * **JMap.Application.Layer.Edition.DynamicFilter.openUpdateDialog**
           *
           * Opens the dynamic filter update dialog for the given layer id.
           *
           * @throws if layer or condition not found
           * @param layerId the JMap layer id
           * @param conditionId the JMap dynamic filter condition id
           * @example
           * ```ts
           * // opens the dynamic filter condition creation dialog for layer id=3
           * JMap.Application.Layer.Edition.DynamicFilter.openUpdateDialog(3)
           * ```
           */
          function openUpdateDialog(layerId: JId, conditionId: number): void

          /**
           * **JMap.Application.Layer.Edition.DynamicFilter.closeDialog**
           *
           * If open, close the dynamic filter dialog (as well for creation or update).
           *
           * @example
           * ```ts
           * // closes the edition (any tab) panel if open.
           * JMap.Application.Layer.Edition.DynamicFilter.closeDialog()
           * ```
           */
          function closeDialog(): void
        }

        /**
         * **JMap.Application.Layer.Edition.Info**
         *
         * You can manage layer info panel here.
         */
        namespace Info {
          /**
           * **JMap.Application.Layer.Edition.Info.openPanel**
           *
           * Open the edition panel, with "info" tab activated, for the given layer
           *
           * @throws if layer not found
           * @param layerId the JMap layer id
           * @example
           * ```ts
           * // open the edition panel, with "info" tab activated, for layer id=3.
           * JMap.Application.Layer.Edition.Info.openPanel(3)
           * ```
           */
          function openPanel(layerId: JId): void

          /**
           * **JMap.Application.Layer.Edition.Info.closePanel**
           *
           * If open, closes the edition panel.
           *
           * @example
           * ```ts
           * // closes the edition (any tab) panel if open.
           * JMap.Application.Layer.Edition.DynamicFilter.closePanel()
           * ```
           */
          function closePanel(): void
        }

        /**
         * **JMap.Application.Layer.Edition.Thematic**
         *
         * You can manage layer thematic panel here.
         */
        namespace Thematic {
          /**
           * **JMap.Application.Layer.Edition.Thematic.openPanel**
           *
           * Opens the edition panel, with "thematics" tab activated, for the given layer
           *
           * @throws if layer not found
           * @param layerId the JMap layer id
           * @example
           * ```ts
           * // opens the edition panel, with "thematics" tab activated, for layer id=3.
           * JMap.Application.Layer.Edition.Thematic.openPanel(3)
           * ```
           */
          function openPanel(layerId: JId): void

          /**
           * **JMap.Application.Layer.Edition.Thematic.closePanel**
           *
           * If open, closes the edition panel.
           *
           * @example
           * ```ts
           * // closes the edition (any tab) panel if open.
           * JMap.Application.Layer.Edition.DynamicFilter.closePanel()
           * ```
           */
          function closePanel(): void
        }

        /**
         * **JMap.Application.Layer.Edition.openPanel**
         *
         * Opens the layer edition panel.
         *
         * This panel has two tabs:
         *  - thematics: only available if some thematics are set on the layer, else is hidden
         *  - dynamic filter: available for non raster layers
         *
         * @throws If layer is not found or layerId is correspond to a layer group, if activeTab is incorrect
         * @param layerId JMap layer id
         * @param activeTab the tab to display: "thematics" or "dynamic-filter"
         * @example
         * ```ts
         * // edits the layer's id="3" thematics (if layer 3 has at least one thematic set)
         * JMap.Application.Layer.Edition.openPanel(3, "thematics")
         *
         * // edits the layer's id="3" dynamic filter, if layer is not raster
         * JMap.Application.Layer.Edition.openPanel(2, "dynamic-filter")
         * ```
         */
        function openPanel(layerId: JId, activeTab: JAPP_LAYER_EDITION_TABS): void

        /**
         * **JMap.Application.Layer.Edition.closePanel**
         *
         * If layer edition panel is opened, will close it. Will stop edition and show the layer tree panel.
         *
         * @example
         * ```ts
         * // closes the layer edition panel
         * JMap.Application.Layer.Edition.closePanel()
         * ```
         */
        function closePanel(): void
      }
    }

    /**
     * **JMap.Application.UI**
     *
     * You can manage the application UI components here.
     */
    namespace UI {
      /**
       * **JMap.Application.UI.Container**
       *
       * You can access the info of the application dom container div.
       */
      namespace Container {
        /**
         * **JMap.Application.UI.Container.getId**
         *
         * Returns the DOM div element id where application UI has been inserted.
         *
         * @example
         * ```ts
         * // return the dom container id, ex : "jmapcloud-ng-types"
         * JMap.Application.UI.Container.getId()
         * ```
         */
        function getId(): string

        /**
         * **JMap.Application.UI.Container.getWidth**
         *
         * Returns the dom container width in pixel.
         *
         * @example
         * ```ts
         * // return the dom container width, ex : 1230
         * JMap.Application.UI.Container.getWidth()
         * ```
         */
        function getWidth(): number

        /**
         * **JMap.Application.UI.Container.getHeight**
         *
         * Returns the dom container height in pixel.
         *
         * @example
         * ```ts
         * // return the dom container height, ex : 966
         * JMap.Application.UI.Container.getHeight()
         * ```
         */
        function getHeight(): number

        /**
         * **JMap.Application.UI.Container.getVisiblePolygonGeometry**
         *
         * Returns a polygon geometry representing the visible coordinates on the map.
         * Works fine even if the map is pitched or rotated.
         * @throws if map is not loaded
         * @example
         * ```ts
         * // returns the polygon geometry representing the visible coordinates on the map.
         * // ex :
         * // {
         * //  "type": "Polygon",
         * //  "coordinates": [
         * //     [
         * //       [ -57, 35],[-39, 23 ], [-36, 36 ], [-52, 45], [-57, 35 ]
         * //     ]
         * //   ]
         * // }
         * JMap.Application.UI.Container.getVisiblePolygonGeometry()
         * ```
         */
        function getVisiblePolygonGeometry(): GeoJSON.Polygon
      }

      /**
       * **JMap.Application.UI.SidePanel**
       *
       * You can manage the application left side panel from here.
       */
      namespace SidePanel {
        /**
         * **JMap.Application.UI.Sidepanel.setVisible**
         *
         * Sets the application left side panel visibility.
         *
         * @param isVisible if true, shows the panel, else hides it
         * @example
         * ```ts
         * // Show the left side panel
         * JMap.Application.UI.Sidepanel.setVisible(true)
         *
         * // Hide the left side panel
         * JMap.Application.UI.Sidepanel.setVisible(false)
         * ```
         */
        function setVisible(isVisible: boolean): void

        /**
         * **JMap.Application.UI.SidePanel.isVisible**
         *
         * Returns true if the JMap Cloud NG main panel on the left is opened.
         *
         * @example
         * ```ts
         * // returns true if side panel is opened
         * JMap.Application.UI.SidePanel.isVisible()
         * ```
         */
        function isVisible(): boolean

        /**
         * **JMap.Application.UI.SidePanel.toggleVisibility**
         *
         * Changes the JMap Cloud NG main panel on the left visibility.
         *
         * If the panel is open, it will close.
         *
         * If the panel is closed, it will open.
         *
         * @example
         * ```ts
         * // change the side panel visibility
         * JMap.Application.UI.SidePanel.toggleVisibility()
         * ```
         */
        function toggleVisibility(): void

        /**
         * **JMap.Application.UI.SidePanel.getWidthOpenInRem**
         *
         * Returns the width of the opened side panel in rem.
         *
         * @example
         * ```ts
         * // returns "28.125rem"
         * JMap.Application.UI.SidePanel.getWidthOpenInRem()
         * ```
         */
        function getWidthOpenInRem(): string

        /**
         * **JMap.Application.UI.SidePanel.getWidthOpenInPixel**
         *
         * Returns the width of the opened side panel in pixel.
         *
         * @example
         * ```ts
         * // returns 450
         * JMap.Application.UI.SidePanel.getWidthOpenInPixel()
         * ```
         */
        function getWidthOpenInPixel(): number

        /**
         * **JMap.Application.UI.SidePanel.getMinimumWidthOpenInPixel**
         *
         * Returns the minimum side panel width.
         *
         * @example
         * ```ts
         * // returns the minimum side panel width
         * JMap.Application.UI.SidePanel.getMinimumWidthOpenInPixel()
         * ```
         */
        function getMinimumWidthOpenInPixel(): number

        /**
         * **JMap.Application.UI.SidePanel.setWidthOpenInPixel**
         *
         * Returns the minimum side panel width.
         *
         * @throws if new width is not a number, or lower than minimum width
         * @param width new panel width in pixel
         * @example
         * ```ts
         * const newWidth = 500
         * if (JMap.Application.UI.SidePanel.getMinimumWidthOpenInPixel() <= newWidth) {
         *  // returns the minimum side panel width
         *  JMap.Application.UI.SidePanel.setWidthOpenInPixel(newWidth)
         * }
         * ```
         */
        function setWidthOpenInPixel(width: number): void

        /**
         * **JMap.Application.UI.SidePanel.getWidthCloseInRem**
         *
         * Returns the width of the closed side panel in rem.
         *
         * @example
         * ```ts
         * // returns "3.75rem"
         * JMap.Application.UI.SidePanel.getWidthCloseInRem()
         * ```
         */
        function getWidthCloseInRem(): string

        /**
         * **JMap.Application.UI.SidePanel.getWidthCloseInPixel**
         *
         * Returns the width of the closed side panel in pixel.
         *
         * @example
         * ```ts
         * // returns 60
         * JMap.Application.UI.SidePanel.getWidthCloseInPixel()
         * ```
         */
        function getWidthCloseInPixel(): number

        /**
         * **JMap.Application.UI.SidePanel.getMainPanelWidthInRem**
         *
         * Returns the width of the main panel (side panel width minus menu width) in rem.
         *
         * @example
         * ```ts
         * // returns "24.375rem"
         * JMap.Application.UI.SidePanel.getMainPanelWidthInRem()
         * ```
         */
        function getMainPanelWidthInRem(): string

        /**
         * **JMap.Application.UI.SidePanel.getMainPanelWidthInPixel**
         *
         * Returns the width of the main panel (side panel width minus menu width) in pixel.
         *
         * @example
         * ```ts
         * // returns 390
         * JMap.Application.UI.SidePanel.getMainPanelWidthInPixel()
         * ```
         */
        function getMainPanelWidthInPixel(): number

        /**
         * **JMap.Application.UI.SidePanel.getHeaderMinHeightInRem**
         *
         * Returns the min height of the Panel header section (where the project name is displayed) in rem.
         *
         * @example
         * ```ts
         * // returns "5rem"
         * JMap.Application.UI.SidePanel.getHeaderMinHeightInRem()
         * ```
         */
        function getHeaderMinHeightInRem(): string

        /**
         * **JMap.Application.UI.SidePanel.getHeaderMinHeightInPixel**
         *
         * Returns the min height of the Panel header section (where the project name is displayed) in pixels.
         *
         * @example
         * ```ts
         * // returns 80
         * JMap.Application.UI.SidePanel.getHeaderMinHeightInPixel()
         * ```
         */
        function getHeaderMinHeightInPixel(): number

        /**
         * **JMap.Application.UI.SidePanel.getTitleMinHeightInRem**
         *
         * Returns the min height of the Panel title section (where the panel name is displayed) in rem.
         *
         * @example
         * ```ts
         * // returns "4rem"
         * JMap.Application.UI.SidePanel.getTitleMinHeightInRem()
         * ```
         */
        function getTitleMinHeightInRem(): string

        /**
         * **JMap.Application.UI.SidePanel.getTitleMinHeightInPixel**
         *
         * Returns the min height of the Panel title section (where the panel name is displayed) in pixels.
         *
         * @example
         * ```ts
         * // returns 64
         * JMap.Application.UI.SidePanel.getTitleMinHeightInPixel()
         * ```
         */
        function getTitleMinHeightInPixel(): number
      }
      /**
       * **JMap.Application.UI.Map**
       *
       * You can manage the Map UI here.
       */
      namespace Map {
        /**
         * **JMap.Application.UI.Map.isGeocodingControlVisible**
         *
         * Returns true if the geocoding control is currently visible.
         *
         * @example
         * ```ts
         * // true or false
         * JMap.Application.UI.Map.isGeocodingControlVisible()
         * ```
         */
        function isGeocodingControlVisible(): boolean

        /**
         * **JMap.Application.UI.Map.setGeocodingControlVisibility**
         *
         * Displays or hides the geocoding control.
         *
         * @param isVisible true to display, false to hide
         * @example
         * ```ts
         * // Display the geocoding control
         * JMap.Application.UI.Map.setGeocodingControlVisibility(true)
         *
         * // Hide the geocoding control
         * JMap.Application.UI.Map.setGeocodingControlVisibility(false)
         * ```
         */
        function setGeocodingControlVisibility(isVisible: boolean): void

        /**
         * **JMap.Application.UI.Map.isSimpleSearchControlVisible**
         *
         * Returns true if the Simple Search control is currently visible.
         *
         * @example
         * ```ts
         * // true or false
         * JMap.Application.UI.Map.isSimpleSearchControlVisible()
         * ```
         */
        function isSimpleSearchControlVisible(): boolean

        /**
         * **JMap.Application.UI.Map.setSimpleSearchControlVisibility**
         *
         * Displays or hides the Simple Search control.
         *
         * @param isVisible true to display, false to hide
         * @example
         * ```ts
         * // Display the Simple Search control
         * JMap.Application.UI.Map.setSimpleSearchControlVisibility(true)
         *
         * // Hide the Simple Search control
         * JMap.Application.UI.Map.setSimpleSearchControlVisibility(false)
         * ```
         */
        function setSimpleSearchControlVisibility(isVisible: boolean): void
      }

      /**
       * **JMap.Application.UI.Theme**
       *
       * You can manage the UI theme here.
       */
      namespace Theme {
        /**
         * **JMap.Application.UI.Theme.isDark**
         *
         * Returns true if the theme is currently dark.
         *
         * @example
         * ```ts
         * // true or false
         * JMap.Application.UI.Theme.isDark()
         * ```
         */
        function isDark(): boolean

        /**
         * **JMap.Application.UI.Theme.setDark**
         *
         * Changes the UI color theme in dark or light.
         *
         * @param isDark if true make the theme dark, else light
         * @example
         * ```ts
         * // make the theme dark
         * JMap.Application.UI.Theme.setDark()
         *
         * // make the theme dark
         * JMap.Application.UI.Theme.setDark(true)
         *
         * // make the theme light
         * JMap.Application.UI.Theme.setDark(false)
         * ```
         */
        function setDark(isDark: boolean): void
      }
    }

    /**
     * **JMap.Application.Print**
     *
     * You can manage everything related to print here.
     */
    namespace Print {
      /**
       * **JMap.Application.Print.setScaleControlVisibility**
       *
       * Displays or hides the scale control widget.
       *
       * @param isVisible true to display, false to hide
       * @example
       * ```ts
       * // Display the scale
       * JMap.Application.Print.setScaleControlVisibility(true)
       *
       * // Hide the scale
       * JMap.Application.Print.setScaleControlVisibility(false)
       * ```
       */
      function setScaleControlVisibility(isVisible: boolean): void

      /**
       * **JMap.Application.Print.isScaleControlVisible**
       *
       * Returns true if the scale control widget is visible, else false.
       *
       * @example
       * ```ts
       * // true if the scale controle widget is displayed
       * JMap.Application.Print.isScaleControlVisible()
       * ```
       */
      function isScaleControlVisible(): boolean

      /**
       * **JMap.Application.Print.setPageTitle**
       *
       * Sets the title displayed in the bottom of the print layout.
       *
       * If empty string, will display no title.
       *
       * @throws if title is not a string
       * @param title The title displayed in the bottom of the print layout
       * @example
       * ```ts
       * // set title
       * JMap.Application.Print.setPageTitle("My custom title")
       * ```
       */
      function setPageTitle(title: string): void

      /**
       * **JMap.Application.Print.getPageTitle**
       *
       * Returns the title displayed in the bottom of the print layout.
       *
       * @example
       * ```ts
       * // returns the displayed title
       * JMap.Application.Print.getPageTitle()
       * ```
       */
      function getPageTitle(): string

      /**
       * **JMap.Application.Print.setPageSubTitle**
       *
       * Sets the subtitle displayed in the bottom of the print layout.
       *
       * @throws if subTitle is not a string
       * @param subTitle The subtitle displayed in the bottom of the print layout
       * @example
       * ```ts
       * // set subtitle
       * JMap.Application.Print.setPageSubTitle("My custom subtitle")
       * ```
       */
      function setPageSubTitle(subTitle: string): void

      /**
       * **JMap.Application.Print.getPageSubTitle**
       *
       * Returns the subtitle displayed in the bottom of the print layout.
       *
       * @example
       * ```ts
       * // returns the displayed subtitle
       * JMap.Application.Print.getPageSubTitle()
       * ```
       */
      function getPageSubTitle(): string

      /**
       * **JMap.Application.Print.isDateVisibile**
       *
       * Returns true if the date is displayed in the bottom of the print layout.
       *
       * @example
       * ```ts
       * // returns true if the date is visible
       * JMap.Application.Print.isDateVisibile()
       * ```
       */
      function isDateVisibile(): boolean

      /**
       * **JMap.Application.Print.setDateVisibility**
       *
       * Sets the date visible or hidden in the bottom of the print layout.
       *
       * @param isVisible true to display, false to hide
       * @example
       * ```ts
       * // Hide the date
       * JMap.Application.Print.setDateVisibility(false)
       *
       * // Show the date
       * JMap.Application.Print.setDateVisibility(true)
       * ```
       */
      function setDateVisibility(isVisible: boolean): void

      /**
       * **JMap.Application.Print.isNorthArrowVisible**
       *
       * Returns true if the north arrow is displayed in the bottom of the print layout.
       *
       * @example
       * ```ts
       * // returns true if the north arrow is visible
       * JMap.Application.Print.isNorthArrowVisible()
       * ```
       */
      function isNorthArrowVisible(): boolean

      /**
       * **JMap.Application.Print.setNorthArrowVisibility**
       *
       * Sets the north arrow visible or hidden in the bottom of the print layout.
       *
       * @param isVisible true to display, false to hide
       * @example
       * ```ts
       * // Hide the north arrow
       * JMap.Application.Print.setNorthArrowVisibility(false)
       *
       * // Show the north arrow
       * JMap.Application.Print.setNorthArrowVisibility(true)
       * ```
       */
      function setNorthArrowVisibility(isVisible: boolean): void

      /**
       * **JMap.Application.Print.getAllPaperFormats**
       *
       * Returns all available paper formats.
       *
       * Different sizes are available: "letter" | "legal" | "a3" | "a4".
       *
       * @example
       * ```ts
       * // returns all available paper formats
       * JMap.Application.Print.getAllPaperFormats()
       * ```
       */
      function getAllPaperFormats(): JAppPaperFormat[]

      /**
       * **JMap.Application.Print.setPaperFormat**
       *
       * Sets the paper format of the print layout.
       *
       * Technical method, you should not use it.
       *
       * @throws if format is incorrect
       * @param format the paper format object or a {@link JAPP_PRINT_PAPER_SIZES}
       * @example
       * ```ts
       * // set the letter paper format
       * JMap.Application.Print.setPaperFormat("letter")
       * ```
       */
      function setPaperFormat(format: JAppPaperFormat | string): void

      /**
       * **JMap.Application.Print.getPaperFormat**
       *
       * Returns the active paper format.
       *
       * @example
       * ```ts
       * // returns active paper format
       * JMap.Application.Print.getPaperFormat()
       * ```
       */
      function getPaperFormat(): JAppPaperFormat

      /**
       * **JMap.Application.Print.isOrientationPortrait**
       *
       * Returns true if the print layout is portrait, else false (landscape).
       *
       * @example
       * ```ts
       * // returns true if the print layout is portrait, else false (landscape)
       * JMap.Application.Print.isOrientationPortrait()
       * ```
       */
      function isOrientationPortrait(): boolean

      /**
       * **JMap.Application.Print.setOrientation**
       *
       * Sets the print layout orientation as portrait or landscape.
       *
       * @throws if isPortrait is not a boolean
       * @param isPortrait true to display as portrait, false as landscape
       * @example
       * ```ts
       * // set the layout as portrait
       * JMap.Application.Print.setOrientation(true)
       *
       * // set the layout as landscape
       * JMap.Application.Print.setOrientation(false)
       * ```
       */
      function setOrientation(isPortrait: boolean): void

      /**
       * **JMap.Application.Print.getFileType**
       *
       * Returns the current type of the file, that is used when downloading the print.
       *
       * One of the following: "png" | "jpeg" | "pdf"
       *
       * @example
       * ```ts
       * // returns "png", "jpeg", or "pdf"
       * JMap.Application.Print.getFileType()
       * ```
       */
      function getFileType(): JAPP_PRINT_FILE_TYPES

      /**
       * **JMap.Application.Print.setFileType**
       *
       * Sets the type of file used when downloading the print.
       *
       * @throws if fileType is not correct
       * @param fileType "png", "jpeg", or "pdf"
       * @example
       * ```ts
       * // set the layout as portrait
       * JMap.Application.Print.setFileType("pdf")
       * ```
       */
      function setFileType(fileType: JAPP_PRINT_FILE_TYPES): void

      /**
       * **JMap.Application.Print.setHiResolution**
       *
       * Sets the parameter determining if the map will be exported in hi resolution or not.
       *
       * @throws if isHiResolution is not a boolean
       * @param isHiResolution true or false
       * @example
       * ```ts
       * // set export mode to hi resolution
       * JMap.Application.Print.setHiResolution(true)
       * ```
       */
      function setHiResolution(isHiResolution: boolean): void

      /**
       * **JMap.Application.Print.getHiResolution**
       *
       * Returns true if the map export is set to hi resolution, false otherwise.
       *
       * @example
       * ```ts
       * // get export resolution
       * JMap.Application.Print.getHiResolution()
       * // true
       * ```
       */
      function getHiResolution(): boolean

      /**
       * **JMap.Application.Print.takeCapture**
       *
       * Builds a screen capture of the map and launches the download of the file, or returns the screen capture as a data url embeded in a {@link JAppPrintCaptureResult}
       * @param returnAsScreenCaptureResult if true, the method will resolve with a {@link JAppPrintCaptureResult} that you can use to embed the image in an HTML page, otherwise the method will resolve with no result
       * @param customRatioWidth The custom ratio width. When both customRatioWidth and customRatioHeight are specified, the captured image will be using a custom paper format having the aspect ratio defined by the specified width/height. returnAsScreenCaptureResult must be set to "true" for this parameter to be taken into account
       * @param customRatioHeight The custom ratio height. returnAsScreenCaptureResult must be set to "true" for this parameters to be taken into account
       *
       * When passing `returnAsScreenCaptureResult = true`, the screen capture process will take into account all Print parameters defined in the Print panel, including page format, scale, North arrow, title, sub-title, etc, but with the following limitations:
       *
       * * the image format returned will always be PNG
       * * If you want the Print panel overlays be present in the screen capture, you must programaticaly switch to the Print panel before calling JMap.Application.Print.takeCapture(true), otherwise only the map will be captured
       *
       *
       * @example
       * ```ts
       * // build print image and launch download of the file
       * JMap.Application.Print.takeCapture()
       *
       * // add an image to a document with the print result
       * JMap.Application.Print.takeCapture(true, 400, 200).then(
       *    printCaptureResult => {
       *      const img = document.createElement("img")
       *      img.src = printCaptureResult.dataUrl
       *      img.style.position = "absolute"
       *      img.width = printCaptureResult.width / 4
       *      img.height = printCaptureResult.height / 4
       *      img.style.top = "10px"
       *      img.style.left = "10px"
       *      img.style.zIndex = 1000
       *      document.body.appendChild(img)
       *  }
       * )
       * ```
       */
      function takeCapture(
        returnAsScreenCaptureResult?: boolean,
        customRatioWidth?: number,
        customRatioHeight?: number
      ): Promise<void | JAppPrintCaptureResult>
    }

    /**
     * **JMap.Application.Event**
     *
     * From this section you can manage your own event listeners reacting to JMap Cloud NG library events.
     *
     * For all your listeners, you need to provide a listener id. We introduced this notion of listener ids in order
     * to be able to know what's the problem if something goes wrong in a listener.
     *
     * Like that we are able to identify more easily the problem in the javascript console.
     *
     * Listener ids have to be unique for the namespace, regardless to the type of event you register your listener to.
     *
     * For example, for all Map Context events, you can register only one listener named "***my-custom-listener***"".
     *
     * A good practice could be prefixing all your listener ids. For example if you work for the city of Montreal
     * they could all start with "***montreal-city-***"".
     *
     * Listeners can be deactivated and reactivated.
     *
     * Deactivating a listener keeps it in the JMap Cloud NG library, but ignores it when an event is triggered.
     */
    namespace Event {
      /**
       * ***JMap.Application.Event.Main***
       *
       * Here you can manage all JMap Cloud NG high level event listeners.
       *
       * Click to see all events available: ***{@link JMap.Application.Event.Main.on}***.
       */
      namespace Main {
        /**
         * ***JMap.Application.Event.Main.on***
         *
         * Here you have all JMap Cloud NG high level available events on which you can attach a listener.
         */
        namespace on {
          /**
           * ***JMap.Application.Event.Main.on.appReady***
           *
           * This event is triggered once when:
           * * all of the application services are loaded,
           * * the redux store and its reducers are also loaded,
           * * the initial session validation has been executed. At thas point, if the session has successfully been validated, the logged-in user will also be available.
           *
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example
           * ```ts
           * // log a message in the console once the application is loaded
           * JMap.Application.Event.Main.on.appReady(
           *   "custom-app-ready",
           *   () => {
           *     if (JMap.User.getToken() !== "-1") {
           *       console.log(`Logged in username is: "${JMap.User.getUsername()}"`)
           *     } else {
           *       console.log(`No user logged in`)
           *     }
           *   }
           * )
           * ```
           */
          function appReady(listenerId: string, fn: () => void): void
        }

        /**
         * ***JMap.Application.Event.Main.activate***
         *
         * Activates the listener.
         *
         * If the listener is already active, does nothing.
         *
         * If the listener is inactive, it will be reactivated and will be called again ...
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // activate the listener "my-main-listener"
         * JMap.Application.Event.Main.activate("my-main-listener")
         * ```
         */
        function activate(listenerId: string): void

        /**
         * ***JMap.Application.Event.Main.deactivate***
         *
         * Deactivates the listener.
         *
         * If the listener id doesn't exist or if the listener is already inactive, does nothing.
         *
         * If the listener is active, it will be deactivated and will be ignored ...
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // deactivate the listener "my-main-listener"
         * JMap.Application.Event.Main.deactivate("my-main-listener")
         * ```
         */
        function deactivate(listenerId: string): void

        /**
         * ***JMap.Application.Event.Main.remove***
         *
         * Removes the listener.
         *
         * If the listener doesn't exist, does nothing.
         *
         * Removes the listener from JMap Cloud NG. The listener is deleted and never called again after that.
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // remove the listener "my-main-listener"
         * JMap.Application.Event.Main.remove("my-main-listener")
         * ```
         */
        function remove(listenerId: string): void
      }

      /**
       * ***JMap.Application.Event.Layer***
       *
       * Here you can manage all JMap Cloud NG layer event listeners.
       *
       * Click to see all events available: ***{@link JMap.Application.Event.Layer.on}***.
       */
      namespace Layer {
        /**
         * ***JMap.Application.Event.Layer.on***
         *
         * Here you have all JMap Cloud NG available layer events on which you can attach a listener.
         */
        namespace on {
          /**
           * ***JMap.Application.Event.Layer.on.doubleClick***
           *
           * This event is triggered when a user double clicks on a layer name in the hierarchical tree of the layers panel.
           *
           * The layer is received as a param property of the event, you can then take any action that would be executed on double click for this layer.
           *
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example
           * ```ts
           * // Triggered when a user double clicks on a layer name
           * JMap.Application.Event.Layer.on.doubleClick("my-layer-double-click-listener", params => {
           *   const layer = params.layer
           *   console.info(`The following layer has been double clicked by the current user: "${layer.name}". Its visibility will be toggled`)
           *   if (!JMap.Layer.isVisible(layer.id)) {
           *     JMap.Layer.ensureLayerIsVisible(layer.id)
           *   } else {
           *     JMap.Layer.setVisible(layer.id, false)
           *   }
           * })
           * ```
           */
          function doubleClick(listenerId: string, fn: (params: JAppLayerEventParams) => void): void
        }

        /**
         * ***JMap.Application.Event.Layer.activate***
         *
         * Activates the listener.
         *
         * If the listener is already active, does nothing.
         *
         * If the listener is inactive, it will be reactivated and will be called again ...
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // activate the listener "my-layer-listener"
         * JMap.Application.Event.Layer.activate("my-layer-listener")
         * ```
         */
        function activate(listenerId: string): void

        /**
         * ***JMap.Application.Event.Layer.deactivate***
         *
         * Deactivates the listener.
         *
         * If the listener id doesn't exist or if the listener is already inactive, does nothing.
         *
         * If the listener is active, it will be deactivated and will be ignored ...
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // deactivate the listener "my-layer-listener"
         * JMap.Application.Event.Layer.deactivate("my-layer-listener")
         * ```
         */
        function deactivate(listenerId: string): void

        /**
         * ***JMap.Application.Event.Layer.remove***
         *
         * Removes the listener.
         *
         * If the listener doesn't exist, does nothing.
         *
         * Removes the listener from JMap Cloud NG. The listener is deleted and never called again after that.
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // remove the listener "my-layer-listener"
         * JMap.Application.Event.Layer.remove("my-layer-listener")
         * ```
         */
        function remove(listenerId: string): void
      }

      /**
       * ***JMap.Application.Event.Extension***
       *
       * Here you can manage all JMap Cloud NG extension event listeners.
       *
       * Click to see all events available: ***{@link JMap.Application.Event.Extension.on}***.
       */
      namespace Extension {
        /**
         * ***JMap.Application.Event.Extension.on***
         *
         * Here you have all JMap Cloud NG available extension events on which you can attach a listener.
         */
        namespace on {
          /**
           * ***JMap.Application.Event.Extension.on.registration***
           *
           * This event is triggered after a user registers his own JMap Cloud NG extension.
           *
           * The extension id is received as a param property of the event.
           *
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example
           * ```ts
           * // Triggered when a user register a new extension
           * JMap.Application.Event.Extension.on.registration("my-extension-listener", params => {
           *   const extensionId = params.extensionId
           *   console.info(`The following extension has been registered by the current user: "${extensionId}".`)
           * })
           * ```
           */
          function registration(listenerId: string, fn: (params: JAppExtensionEventParams) => void): void
        }
        /**
         * ***JMap.Application.Event.Extension.activate***
         *
         * Activates the listener.
         *
         * If the listener is already active, does nothing.
         *
         * If the listener is inactive, it will be reactivated and will be called again ...
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // activate the listener "my-extension-listener"
         * JMap.Application.Event.Extension.activate("my-extension-listener")
         * ```
         */
        function activate(listenerId: string): void

        /**
         * ***JMap.Application.Event.Extension.deactivate***
         *
         * Deactivates the listener.
         *
         * If the listener id doesn't exist or if the listener is already inactive, does nothing.
         *
         * If the listener is active, it will be deactivated and will be ignored ...
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // deactivate the listener "my-extension-listener"
         * JMap.Application.Event.Extension.deactivate("my-extension-listener")
         * ```
         */
        function deactivate(listenerId: string): void

        /**
         * ***JMap.Application.Event.Extension.remove***
         *
         * Removes the listener.
         *
         * If the listener doesn't exist, does nothing.
         *
         * Removes the listener from JMap Cloud NG. The listener is deleted and never called again after that.
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // remove the listener "my-extension-listener"
         * JMap.Application.Event.Extension.remove("my-extension-listener")
         * ```
         */
        function remove(listenerId: string): void
      }

      /**
       * ***JMap.Application.Event.UI***
       *
       * Here you can manage all JMap Cloud NG high level event listeners.
       *
       * Click to see all events available: ***{@link JMap.Application.Event.Main.on}***.
       */
      namespace UI {
        /**
         * ***JMap.Application.Event.UI.on***
         *
         * Here you have all JMap Cloud NG high level available events on which you can attach a listener.
         */
        namespace on {
          /**
           * ***JMap.Application.Event.UI.on.sidePanelVisibilityChanged***
           *
           * This event is triggered when the side panel is closed or opened.
           *
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example
           * ```ts
           * // log a message in the console when the side panel is closed or opened
           * JMap.Application.Event.UI.on.sidePanelVisibilityChanged(
           *   "custom-side-panel-visibility-changed",
           *   params => console.log(`New panel visibility: ${params.isVisible}"`)
           * )
           * ```
           */
          function sidePanelVisibilityChanged(
            listenerId: string,
            fn: (params: JAppUISidePanelVisibilityChangedEventParams) => void
          ): void

          /**
           * ***JMap.Application.Event.UI.on.sidePanelWidthChanged***
           *
           * This event is triggered when the side panel width changes.
           *
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example
           * ```ts
           * // log a message in the console when the side panel width changes
           * JMap.Application.Event.UI.on.sidePanelWidthChanged(
           *   "custom-side-panel-width-changed",
           *   params => console.log(`New panel width ${params.width}"`)
           * )
           * ```
           */
          function sidePanelWidthChanged(
            listenerId: string,
            fn: (params: JAppUISidePanelWidthChangedEventParams) => void
          ): void
        }

        /**
         * ***JMap.Application.Event.UI.activate***
         *
         * Activates the listener.
         *
         * If the listener is already active, does nothing.
         *
         * If the listener is inactive, it will be reactivated and will be called again ...
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // activate the listener "my-ui-listener"
         * JMap.Application.Event.UI.activate("my-ui-listener")
         * ```
         */
        function activate(listenerId: string): void

        /**
         * ***JMap.Application.Event.UI.deactivate***
         *
         * Deactivates the listener.
         *
         * If the listener id doesn't exist or if the listener is already inactive, does nothing.
         *
         * If the listener is active, it will be deactivated and will be ignored ...
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // deactivate the listener "my-ui-listener"
         * JMap.Application.Event.UI.deactivate("my-ui-listener")
         * ```
         */
        function deactivate(listenerId: string): void

        /**
         * ***JMap.Application.Event.UI.remove***
         *
         * Removes the listener.
         *
         * If the listener doesn't exist, does nothing.
         *
         * Removes the listener from JMap Cloud NG. The listener is deleted and never called again after that.
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // remove the listener "my-ui-listener"
         * JMap.Application.Event.UI.remove("my-ui-listener")
         * ```
         */
        function remove(listenerId: string): void
      }

      /**
       * ***JMap.Application.Event.MapContext***
       *
       * Here you can manage all JMap Cloud NG map context event listeners.
       *
       * Click to see all events available: ***{@link JMap.Application.Event.MapContext.on}***.
       */
      namespace MapContext {
        /**
         * ***JMap.Application.Event.MapContext.on***
         *
         * Here you have all JMap Cloud NG available map context events on which you can attach a listener.
         */
        namespace on {
          /**
           * ***JMap.Application.Event.MapContext.on.afterApply***
           *
           * This event is triggered after:
           *  - The NG Core event JMap.Event.MapContext.on.afterApply has been triggered
           *  - NG App map-context related things has been applied or processed
           *
           * You can access extension's data from this event, see example below.
           *
           * @param listenerId Your listener id (must be unique)
           * @param fn Your listener function
           * @example
           * ```ts
           * // Triggered after a map-context is applied
           * JMap.Application.Event.MapContext.on.afterApply("my-after-apply-listener", params => {
           *   console.info(`After apply map context id="${params.context.title}"`, params.context)
           *   const isExtensionDataSet = params.isExtensionDataSetById("my-extension")
           *   if (!isExtensionDataSet) {
           *     console.info("No extension data in map-context")
           *   } else {
           *     console.info("Extension map context data = ", params.getExtensionDataById("my-extension"))
           *   }
           * })
           * ```
           */
          function afterApply(listenerId: string, fn: (params: JMapContextAfterApplyEventParams) => void): void
        }

        /**
         * ***JMap.Application.Event.MapContext.activate***
         *
         * Activates the listener.
         *
         * If the listener is already active, does nothing.
         *
         * If the listener is inactive, it will be reactivated and will be called again ...
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // activate the listener "my-mapcontext-listener"
         * JMap.Application.Event.MapContext.activate("my-mapcontext-listener")
         * ```
         */
        function activate(listenerId: string): void

        /**
         * ***JMap.Application.Event.MapContext.deactivate***
         *
         * Deactivates the listener.
         *
         * If the listener id doesn't exists or if the listener is already inactive, does nothing.
         *
         * If the listener is active, it will be deactivated and will be ignored ...
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // deactivate the listener "my-mapcontext-listener"
         * JMap.Application.Event.MapContext.deactivate("my-mapcontext-listener")
         * ```
         */
        function deactivate(listenerId: string): void

        /**
         * ***JMap.Application.Event.MapContext.remove***
         *
         * Removes the listener.
         *
         * If the listener doesn't exist, does nothing.
         *
         * Remove the listener from JMap Cloud NG Core library. The listener is deleted and never called again after that.
         *
         * @param listenerId The listener id
         * @example
         * ```ts
         * // remove the listener "my-mapcontext-listener"
         * JMap.Application.Event.MapContext.remove("my-mapcontext-listener")
         * ```
         */
        function remove(listenerId: string): void
      }
    }

    /**
     * **JMap.Application.User**
     *
     * You can manage everything related to user in JMap Cloud NG here.
     */
    namespace User {
      /**
       * **JMap.Application.User.addPopupMenuAction**
       *
       * Adds an action to the JMap User menu (visible in the project selection panel).
       *
       * An action must set the "href" OR the "onCLick" parameters, but not both.
       *
       * **Displaying the action's label in the UI**
       * The action's label will be translated by JMap Cloud NG translation engine if a JTranslationItem is passed,
       * otherwise the simple string will be used.
       * (see See {@link JMap.Language.translate} and {@link JMap.Language.addBundle} for more details on translations)
       *
       * @param action : the action to add
       * @param index : will insert at a specific index in the menu. Start at 0. If index is not correct insert at the end
       * @example
       * ```ts
       * JMap.Application.User.addPopupMenuAction({
       *   id: "my-unique-id",
       *   icon: "fas fa-info-circle",
       *   label: {  key: "my.custom.menu.item.translation.key", bundleId: "myTranslationBundleId"}, // label can also be a simple string
       *   isHelp: true, // if true will be displayed in the JMap help menu
       *   onClick: () => window.open("https://link-to-my-documentation", "_blanck")
       * }, 2)
       * ```
       */
      function addPopupMenuAction(action: JAppUserAction, index?: number): void

      /**
       * ***JMap.Application.User.existsPopupMenuActionById***
       *
       * Returns true if an action menu exists for the given id, else false.
       *
       * @param actionId the action menu id
       * @throws if actionId is not a string (non empty)
       * @example
       * ```ts
       * // returns true if the action menu id="my-custom-action-menu" exists, else false
       * JMap.Application.User.existsPopupMenuActionById("my-custom-action-menu")
       * ```
       */
      function existsPopupMenuActionById(actionId: string): boolean

      /**
       * ***JMap.Application.User.removePopupMenuActionById***
       *
       * Removes an existing action menu
       *
       * @param actionId the action menu id
       * @throws if actionId is not valid, or not found
       * @example
       * ```ts
       * // remove the action menu id="my-custom-action-menu"
       * JMap.Application.User.removePopupMenuActionById("my-custom-action-menu")
       * ```
       */
      function removePopupMenuActionById(actionId: string): void
    }

    /**
     * **JMap.Application.Extension**
     *
     * You can manage everything related to JMap Cloud NG extensions here.
     */
    namespace Extension {
      /**
       * ***JMap.Application.Extension.register***
       *
       * Registers your own JMap Cloud NG extension.
       *
       * @throws Error if a parameter is not correct
       * @param extension The extension
       * @example
       * ```ts
       * JMap.Application.Extension.register({
       *  id: "MyExtension", // Unique id
       *  initFn: () => {
       *    // here you can start your UI component if needed
       *    console.log("JMap Cloud NG is started and my extension has been successfuly started")
       *  },
       *  onPanelCreation: panelContainerId => {
       *    console.info("Create your component here")
       *  },
       *  onPanelDestroy: panelContainerId => {
       *    console.info("Destroy your component here")
       *  },
       *  onRegistrationDone: () => {
       *    console.info("My extension has been successfully registered")
       *  }
       * })
       * ```
       */
      function register(extension: JAppExtension): void

      /**
       * ***JMap.Application.Extension.isRegistered***
       *
       * Tells if an JMap Cloud NG extension has been registered or not.
       *
       * It can be usefull to know if a JMap Cloud NG extension is in use or not.
       *
       * @throws Error if extensionId format is not correct
       * @param extensionId The extension id
       * @example
       * ```ts
       * // returns true if extension id="my-extension" is in use or not
       * JMap.Extension.isRegistered("my-extension")
       * ```
       */
      function isRegistered(extensionId: string): boolean

      /**
       * ***JMap.Application.Extension.getAllRegisteredIds***
       *
       * Returns all JMap Cloud NG registered extension ids.
       *
       * Desn't list JMap Cloud NG Core extensions, only JMap Cloud NG extensions.
       *
       * @example
       * ```ts
       * // Could returns [ "my-first-extension", "my-second-extension" ]
       * JMap.Extension.getAllRegisteredIds()
       * ```
       */
      function getAllRegisteredIds(): string[]
    }

    /**
     * **JMap.Application.Message**
     *
     * You can manage the application Messages here.
     */
    namespace Message {
      /**
       * ***JMap.Application.Message.error***
       *
       * Adds an error message in the application message stack for the current session.
       *
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example
       * ```ts
       * const message = "This operation is not allowed"
       * JMap.Application.Message.error(message, { duration: 5000 })
       * ```
       */
      function error(message: string, options?: JAppMessageOptions): void

      /**
       * ***JMap.Application.Message.warning***
       *
       * Adds an warning message in the application message stack for the current session.
       *
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example
       * ```ts
       * const message = "This operation has no effect"
       * JMap.Application.Message.warning(message, { duration: 5000 })
       * ```
       */
      function warning(message: string, options?: JAppMessageOptions): void

      /**
       * ***JMap.Application.Message.info***
       *
       * Adds an info message in the application message stack for the current session.
       *
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example
       * ```ts
       * const message = "You are here"
       * JMap.Application.Message.info(message, { duration: 5000 })
       * ```
       */
      function info(message: string, options?: JAppMessageOptions): void

      /**
       * ***JMap.Application.Message.success***
       *
       * Adds an success message in the application message stack for the current session.
       *
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example
       * ```ts
       * const message = "The operation was successful"
       * JMap.Application.Message.success(message, { duration: 5000 })
       * ```
       */
      function success(message: string, options?: JAppMessageOptions): void

      /**
       * ***JMap.Application.Message.confirmMessage***
       *
       * Prompts a confirmation dialog message on the screen.
       *
       * The onSuccess callback is called when the user clicked "confirm" button.
       *
       * If it's an input confirm message, the onSuccess will get the input, else an empty string.
       *
       * The optional onCancel callback is called when the cancel button is clicked.
       *
       * @param params message parameters
       * @example
       * ```ts
       * JMap.Application.Message.confirmMessage({
       *   message: "Are you sure to do a given action ?",
       *   onSuccess: () => console.log(`The user is sure`),
       *   onCancel: () => console.info("The user is not sure")
       * })
       *
       * JMap.Application.Message.confirmMessage({
       *   message: "City name :",
       *   isInputMessage: true,
       *   onSuccess: cityName => console.log(`City name input = ${cityName}`),
       *   onCancel: () => console.info("Input has been canceled")
       * })
       * ```
       */
      function confirmMessage(params: JAppConfirmMessage): void

      /**
       * ***JMap.Application.Message.display***
       *
       * Adds an generic message in the application message stack for the current session.
       * severity level should be passed (will default to "info")
       *
       * @param message the text of the message
       * @param options a JAppMessageOptions object
       * @example
       * ```ts
       * const message = "The operation has failed"
       * const level = "error"
       * JMap.Application.Message.display(message, { duration: 5000 , severity: level})
       * ```
       */
      function display(message: string, options?: JAppMessageOptions): void

      /**
       * ***JMap.Application.Message.displayWaitingOverlay***
       *
       * Opens an overlay panel that displays your message and a loading bar.
       *
       * User cannot hide or close this overlay, it aims to avoid user interactions while you are doing an async processing.
       *
       * If overlay is already displaying a previous message, it will display only the new message and hide the previous message (until you close the new message).
       *
       * Overlay is displayed all the time until you call the method {@link JMap.Application.Message.closeWaitingOverlay}.
       *
       * This method is used to close one or more messages:
       *  - Called without params, it will close all messages
       *  - Called with a messageId, it will close only the message for the given message id
       *
       * @param message the message to display
       * @throws if message is not a non empty string
       * @returns the message id, usefull when you display multiple messages at the same time, but want to close only one.
       * @example
       * ```ts
       * // display a waiting overlay, making the app unavailable for user as long it is displayed
       * const messageId = JMap.Application.Message.displayWaitingOverlay("Please wait, processing data")
       * // NG app is now unavailable for the user
       * // You can do some asynchronous processing
       * myAsyncProcess()
       *  .then(() => {
       *    // close the waiting overlay
       *    JMap.Application.Message.closeWaitingOverlay(messageId)
       *    // NG App is now available again
       *    JMap.Application.Message.success("The process was successfully completed")
       *  })
       *  .catch(error => {
       *    // close the waiting overlay
       *    JMap.Application.Message.closeWaitingOverlay(messageId)
       *    // NG App is now available again
       *    console.error(error)
       *    JMap.Application.Message.error("An error has occurred while processing")
       *  })
       * ```
       */
      function displayWaitingOverlay(message: string): string

      /**
       * ***JMap.Application.Message.closeWaitingOverlay***
       *
       * Close all overlay messages or just one.
       *
       * If no overlay is displayed, do nothing.
       *
       * @param messageId the message to close
       * @throws if you pass a message id that is not found
       * @example
       * ```ts
       * // display a waiting overlay, making the app unavailable for user as long it is displayed
       * const messageId = JMap.Application.Message.displayWaitingOverlay("Please wait, processing data")
       * // NG app is now unavailable for the user
       * // You can do some asynchronous processing
       * myAsyncProcess()
       *  .then(() => {
       *    // close the waiting overlay
       *    JMap.Application.Message.closeWaitingOverlay(messageId)
       *    // NG App is now available again
       *    JMap.Application.Message.success("The process was successfully completed")
       *  })
       *  .catch(error => {
       *    // close the waiting overlay
       *    JMap.Application.Message.closeWaitingOverlay(messageId)
       *    // NG App is now available again
       *    console.error(error)
       *    JMap.Application.Message.error("An error has occurred while processing")
       *  })
       * ```
       */
      function closeWaitingOverlay(messageId?: string): void
    }

    /**
     * **JMap.Application.Form**
     *
     * You can render forms using this.
     */
    namespace Form {
      /**
       * **JMap.Application.Form.openForm**
       *
       * Opens a form dialog in the application. Depending on the shape of `params`, this will open either:
       *  - a layer-based form (when `layerId` is provided), or
       *  - a table-based form (when `tableId` is provided).
       *
       * When opening a layer form:
       *  - `layerId` is required.
       *  - You can optionally pass `featureId` or a full `feature` (GeoJSON.Feature) to edit an existing feature.
       *  - `isReadOnly` controls whether the form is editable.
       *  - `onSubmit` (if provided) is called after the user submits the form.
       *
       * When opening a table form:
       *  - `tableId` is required.
       *  - You can optionally pass `row` (an object of key/value pairs) to edit an existing row.
       *  - `isReadOnly` controls whether the form is editable.
       *  - `onSubmit` (if provided) is called after the user submits the form.
       *
       * @param params The parameters that configure which form to open:
       *   - For a **layer form**:
       *     - `layerId` (string): The ID of the layer to open the form for.
       *     - `featureId?` (string): (Optional) The ID of the feature in that layer to load.
       *     - `feature?` (GeoJSON.Feature): (Optional) A full GeoJSON feature to load instead of just an ID.
       *   - For a **table form**:
       *     - `tableId` (string): The ID of the table to open the form for.
       *     - `row?` ({ [key: string]: any }): (Optional) The row data to load into the form.
       *   - Common to both shapes:
       *     - `isReadOnly` (boolean): If `true`, the form will be displayed in read‐only mode.
       *     - `onSubmit?` (() => void): (Optional) Callback invoked after the form is successfully submitted.
       * @example
       * ```ts
       * // Example: Open a layer form for editing an existing feature
       * formSVC.openForm({
       *   layerId: "db4bc79b-03fe-4cf7-a4bc-fb76d69cabdf",
       *   featureId: "3022",
       *   isReadOnly: false,
       *   onSubmit: () => {
       *     console.log("Layer form submitted successfully");
       *   }
       * });
       * ```
       */
      function openForm(params: JFormDialogParams): void
    }
  }
}
