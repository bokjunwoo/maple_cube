import { CubeHistory } from '../api/api';

type SelectItemType = {
  data: CubeHistory[];
  onSelect: (characterName: string) => void;
  selectedCharacter: string;
  selectedItem: string;
};

export const SelectItem = ({
  data,
  onSelect,
  selectedCharacter,
  selectedItem,
}: SelectItemType) => {
  const characterItems = [
    ...new Set(
      data
        .filter((item) => item.character_name === selectedCharacter)
        .map((item) => item.target_item)
    ),
  ];

  const selectedItems = data.filter(
    (item) =>
      item.character_name === selectedCharacter &&
      item.target_item === selectedItem
  );

  const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <>
      <div>
        <select onChange={handleItemChange}>
          <option value="">아이템</option>
          {characterItems.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {selectedItems.length !== 0 && (
        <h3>
          {selectedItem}의 큐브사용 개수는 {selectedItems.length}개 입니다.
        </h3>
      )}
    </>
  );
};
