import useBoolean from 'hooks/useBoolean';

export default function useToggle(): [boolean, () => void] {
  const { value, toggle } = useBoolean(false);
  return [value, toggle];
}
