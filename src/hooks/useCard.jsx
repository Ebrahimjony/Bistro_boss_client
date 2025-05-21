import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import useAuth from './useAuth';

const useCard = () => {
  const axiosSecure = useAxios()
   const { user } = useAuth()
  //tan stack query -----   search

  const { refetch, data: card = [] } = useQuery({
    queryKey: ['card',user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cards?email=${user.email}`)
      return res.data;
    }
  })
  return [card, refetch];
};

export default useCard;