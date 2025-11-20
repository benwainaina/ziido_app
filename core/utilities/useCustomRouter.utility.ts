import { useNavigation } from '@react-navigation/native';

export const useCustomRouterUtility = () => {
  /**
   * hooks
   */
  const navigation = useNavigation();

  return {
    navigate: (path: string, args: any) => navigation.navigate(path, args),
  };
};
