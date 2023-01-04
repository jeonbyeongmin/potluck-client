import useBoolean from 'hooks/useBoolean';

export default function useToggle(
  initialValue: boolean = false
): [boolean, () => void] {
  const { value, toggle } = useBoolean(initialValue);
  return [value, toggle];
}
