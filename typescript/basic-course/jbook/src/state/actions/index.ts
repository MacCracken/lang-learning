import { CellTypes, CellDirections } from "../cell";
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

export interface InsertCellAction {
  type: ActionType.INSERT_CELL_BEFORE;
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

export type Action =
  MoveCellAction
  | DeleteCellAction
  | InsertCellAction
  | UpdateCellAction;