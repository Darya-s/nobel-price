import useNobelPrize from './useNobelPrize';
import CustomPaginationActionsTable from './Table';

function NobelPrize() {
  const [laureates] = useNobelPrize({ limit: 10, offset: 0 });

  return <CustomPaginationActionsTable data={laureates} />;
}

export default NobelPrize;
