export interface MaterialSchema<Props = {}> {
  /** material name */
  name: string;

  /** material preview icon */
  icon?: string;

  /** material title */
  title?: string;

  /** material description */
  description?: string;

  /** material document access url */
  doc?: string;

  /** only displayed on materials panel, cannot be dragged and dropped (default?: false)*/
  locked?: boolean;

  /** invisible in materials panel (default?: false) */
  hidden?: boolean;

  /** material props */
  props?: Props;
}
