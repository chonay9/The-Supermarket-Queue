function queueTime(customers, n) {

  let result = 0
  let tills = [...Array(n)]

  while(customers.length) {
    
    // 1. next one(s), please!
    for (let i = 0; i < tills.length; i++) {
      if(!tills[i] && customers.length) {
        tills[i] = customers.shift()
      }
    }
    
    // 2. beep beep beep
    const fastestCustomer = Math.min(...tills.filter(Boolean))
    tills = tills.map(till => Math.max(0, till - fastestCustomer))
    result += fastestCustomer
  }
  
  // no more customers
  // still waiting for the slowest customers
  
  const slowestCustomer = tills.filter(Boolean).length ? Math.max(...tills.filter(Boolean)) : 0
  return result + slowestCustomer;
}