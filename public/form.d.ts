declare type formDialogParams = {
  type: "layer"
  layerId: JId
  featureId?: JId
  feature?: GeoJSON.Feature
} | {
  type: "table"
  tableId: JId
  row: { [key: string]: any }
  isReadOnly: boolean
} | null
