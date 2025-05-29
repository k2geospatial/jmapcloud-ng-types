declare type formDialogParams = {
  type: "layer"
  layerId: JId
  featureId?: JId
  feature?: GeoJSON.Feature
} | {
  type: "table"
  table: JTable
  row?: { [key: string]: any }
  isReadOnly: boolean
  onCreate: () => void
} | null
