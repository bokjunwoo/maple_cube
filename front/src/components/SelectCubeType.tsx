import { CubeHistory } from '../api/api';

type SelectCubeTypeType = {
  data: CubeHistory[];
  selectedCubeType: string;
};

export const SelectCubeType = ({
  data,
  selectedCubeType,
}: SelectCubeTypeType) => {
  const optionGrade = [
    ...new Set(
      data.map(
        (item) =>
          (item.after_potential_options.length === 0 &&
            item.additional_potential_option_grade) ||
          (item.after_additional_potential_options.length === 0 &&
            item.potential_option_grade) ||
          ''
      )
    ),
  ];

  const gradeCounts: { [key: string]: number } = {};
  data.forEach((item) => {
    const grade =
      (item.after_potential_options.length === 0 &&
        item.additional_potential_option_grade) ||
      (item.after_additional_potential_options.length === 0 &&
        item.potential_option_grade);
    if (grade) {
      gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;
    }
  });

  console.log(gradeCounts);

  const potentialName =
    selectedCubeType === '수상한 에디셔널 큐브' ||
    selectedCubeType === '에디셔널 큐브'
      ? '에디셔널'
      : '잠재능력';

  console.log('optionGrade', optionGrade);

  return (
    <ul>
      {optionGrade.map((optionGrade) => {
        return (
          <li key={optionGrade}>
            {optionGrade} 등급 {potentialName} ({gradeCounts[optionGrade] || 0}
            개)
          </li>
        );
      })}
    </ul>
  );
};
