function useSelectStrategy() {
  const strategies = [
    {
      name: 'spread away',
      id: 'spread away',
      params: {
        budget: 2000,
        spreadEdge: 2,
        acceptedProfitPercent: 2,
        distanceFromSecondPercent: 5,
        minimumRivalValue: 200,
      },
    },
    {
      name: 'spread Delay',
      id: 'spread Delay',
      params: {
        budget: 2000,
        spreadEdge: 2,
        acceptedProfitPercent: 2,
        distanceFromSecondPercent: 5,
        minimumRivalValue: 200,
      },
    },
  ];
  return { strategies };
}
export default useSelectStrategy;
