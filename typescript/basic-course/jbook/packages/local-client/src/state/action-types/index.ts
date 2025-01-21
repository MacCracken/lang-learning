export enum ActionType {
  MOVE_CELL = 'move_cell',
  DELETE_CELL = 'deleted_cell',
  INSERT_CELL_AFTER = 'insert_cell',
  UPDATE_CELL = 'update_cell',
  SAVE_CELL = 'save_cell',
  BUNDLE_START = 'bundle_start',
  BUNDLE_COMPLETE = 'bundle_complete',
  FETCH_CELLS = 'fetch_cells',
  FETCH_CELL_COMPLETE = 'fetch_cells_complete',
  FETCH_CELLS_ERROR  = 'fetch_cells_error',
}