export interface CubeHistory {
  id: string;
  character_name: string;
  world_name: string;
  create_date: string;
  cube_type: string;
  item_upgrade_result: string;
  miracle_time_flag: string;
  item_equip_part: string;
  item_level: number;
  target_item: string;
  potential_option_grade: string;
  additional_potential_option_grade: string;
  upgradeguarantee: boolean;
  upgradeguaranteecount: number;
  before_potential_options: CubeResultOptionDTO[];
  before_additional_potential_options: CubeResultOptionDTO[];
  after_potential_options: CubeResultOptionDTO[];
  after_additional_potential_options: CubeResultOptionDTO[];
}

interface CubeResultOptionDTO {
  value?: string;
  grade?: string;
}

interface CubeHistoryResponseDTO {
  count: number;
  cube_histories: CubeHistory[];
  next_cursor: string;
}
