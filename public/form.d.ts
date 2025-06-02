declare type JFormDialogParams = JFormDialogLayerParams | JFormDialogTableParams

declare type JFormDialogLayerParams = {
  layerId: JId
  featureId?: JId
  feature?: GeoJSON.Feature
  isReadOnly: boolean
  onSubmit?: () => void
}

declare type JFormDialogTableParams = {
  tableId: JId
  row?: { [key: string]: any }
  isReadOnly: boolean
  onSubmit?: () => void
}  
