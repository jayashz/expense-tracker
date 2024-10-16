import React,{useState, useEffect} from 'react'
import ExpensesOut from '../component/Expenses/ExpensesOut'
import { fetchExp } from '../util/https';
import { setExpense } from '../store/exp-slice';
import LoadingOverlay from '../component/ui/LoadingOverlay';
import ErrorScreen from '../component/ui/ErrorScreen'
import { useDispatch } from "react-redux";

const RecentScreen = () => {
  const dispatch = useDispatch();
  const [isFetching,setIsFetching]=useState(true);
  const [error,setError] = useState();

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try{
        const expenses = await fetchExp();
        dispatch(setExpense(expenses));
      }catch(error){
        setError('Could not fetch Expenses...');
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  function errorHandler(){
    setError(null);
  }
  if(error){
    return <ErrorScreen message={error} onConfirm={errorHandler} />
  }
  if(isFetching){
    return <LoadingOverlay/>
  }

  return (
    <ExpensesOut expPeriod='Last 7 days'/>
  )
}

export default RecentScreen