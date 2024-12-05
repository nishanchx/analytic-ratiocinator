document.getElementById('processSets').addEventListener('click', () => {
    // Get input values
    const warehouseA = document.getElementById('warehouseA').value.split(',').map(item => item.trim());
    const warehouseB = document.getElementById('warehouseB').value.split(',').map(item => item.trim());
    const pendingOrders = document.getElementById('pendingOrders').value.split(',').map(item => item.trim());
    const routes = document.getElementById('routes').value.split(',').map(item => item.trim());
  
    // Perform operations
    const unionAB = [...new Set([...warehouseA, ...warehouseB])];
    const satisfiesOrders = pendingOrders.every(order => unionAB.includes(order));
    const routeOverlap = routes.filter(route => warehouseA.includes(route) || warehouseB.includes(route));
  
    // Display results
    const results = document.getElementById('results');
    results.innerHTML = `
      <p><strong>Union of Warehouse A and B:</strong> ${unionAB.join(', ')}</p>
      <p><strong>Pending Orders Satisfied:</strong> ${satisfiesOrders ? 'Yes' : 'No'}</p>
      <p><strong>Routes Overlapping:</strong> ${routeOverlap.length > 0 ? routeOverlap.join(', ') : 'None'}</p>
    `;
  });
  