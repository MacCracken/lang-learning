import { Cell, CellTypes, CellDirections } from "../cell";
import { ActionType } from "../action-types";

export interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: CellDirections;
  }
};

export interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
};

export interface InsertCellAfterAction {
  type: ActionType.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellTypes;
  }
};

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  }
};

export interface SaveCellAction {
  type: ActionType.SAVE_CELL;
  payload: {
    id: string;
    content: string;
  }
};

export interface BundleStartAction {
  type: ActionType.BUNDLE_START,
  payload: {
    cellId: string;
  }
};

export interface BundleCompleteAction {
  type: ActionType.BUNDLE_COMPLETE,
  payload: {
    cellId: string;
    bundle: {
      code: string;
      err: string;
    }
  }
};

export interface FetchCellsAction {
  type: ActionType.FETCH_CELLS,
};

export interface FetchCellsCompleteAction {
  type: ActionType.FETCH_CELL_COMPLETE,
  payload: Cell[];
};

export interface FetchCellsErrorAction {
  type: ActionType.FETCH_CELLS_ERROR,
  payload: string;
};

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAfterAction
  | UpdateCellAction
  | SaveCellAction
  | BundleStartAction
  | BundleCompleteAction
  | FetchCellsAction
  | FetchCellsCompleteAction
  | FetchCellsErrorAction;
