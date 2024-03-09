export interface WidgetPosition {
  /** widget position x (default?:0) */
  x?: number;

  /** widget position y (default?:0) */
  y?: number;

  /** widget dimension width (default?: 1) */
  w?: number;

  /** widget dimension height (default?: 1) */
  h?: number;
}

export interface WidgetSchema extends WidgetPosition {
  /** minimum width allowed during resize/creation (default?: undefined = un-constrained) */
  minW?: number;

  /** maximum width allowed during resize/creation (default?: undefined = un-constrained) */
  maxW?: number;

  /** minimum height allowed during resize/creation (default?: undefined = un-constrained) */
  minH?: number;

  /** maximum height allowed during resize/creation (default?: undefined = un-constrained) */
  maxH?: number;

  /** prevent users from directly moving (default?: false) */
  noMove?: boolean;

  /** prevent users from directly resizing (default?: true) */
  noResize?: boolean;

  /** same as noMove+noResize (default?: false)*/
  locked?: boolean;

  /** invisible (default?: false) */
  hidden?: boolean;

  /** widget name */
  name: string;

  /** value for `x-id` stored on the widget */
  id: string;
}
