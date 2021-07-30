 //feedback reduce
 const feedbacks = (feedbacks = [], action) => {
     switch (action.type) {
         case 'FETCH_ALL':
             return action.payload;
         case 'CRAETE':
             return [...feedbacks, action.payload];
         default:
             return feedbacks;
     }
 }
 export default feedbacks
