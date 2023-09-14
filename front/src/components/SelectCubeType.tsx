import { CubeHistory } from '../api/api';

type SelectCubeTypeType = {
  data: CubeHistory[];
  selectedCubeType: string;
};

export const SelectCubeType = ({
  data,
  selectedCubeType,
}: SelectCubeTypeType) => {
  const otpionGrade = [
    ...new Set(
      data.map(
        (item) =>
          (item.after_potential_options.length === 0 &&
            item.additional_potential_option_grade) ||
          (item.after_additional_potential_options.length === 0 &&
            item.potential_option_grade) ||
          null
      )
    ),
  ];

  const potentialName =
    selectedCubeType === '수상한 에디셔널 큐브' ||
    selectedCubeType === '에디셔널 큐브'
      ? '에디셔널'
      : '잠재능력';

  console.log('otpionGrade', otpionGrade);

  return (
    <ul>
      {otpionGrade.map((item) => {
        return (
          <li key={item}>
            {item} 등급 {potentialName}
          </li>
        );
      })}
    </ul>
  );
};
