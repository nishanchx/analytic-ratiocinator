document.getElementById('processSets').addEventListener('click', () => {
    const warehousesInput = document.getElementById('warehouses').value;
    const ordersInput = document.getElementById('orders').value.split(',').map(item => item.trim());
    const routesInput = document.getElementById('routes').value;
  
    const resultsDiv = document.getElementById('results');
  
    try {
      // Parse JSON inputs
      const warehouses = JSON.parse(warehousesInput);
      const routes = JSON.parse(routesInput);
  
      // Calculate union of all warehouse inventories
      const allInventory = Object.values(warehouses).flat();
      const inventoryUnion = [...new Set(allInventory)];
  
      // Check if all orders are satisfied
      const ordersSatisfied = ordersInput.every(order => inventoryUnion.includes(order));
  
      // Analyze overlapping routes
      const routeOverlap = Object.entries(routes).reduce((acc, [route, points]) => {
        points.forEach(point => {
          acc[point] = (acc[point] || 0) + 1;
        });
        return acc;
      }, {});
  
      const overlappingRoutes = Object.entries(routeOverlap).filter(([_, count]) => count > 1);
  
      // Display results
      resultsDiv.innerHTML = `
        <p><strong>Union of Inventory:</strong> ${inventoryUnion.join(', ')}</p>
        <p><strong>Orders Satisfied:</strong> ${ordersSatisfied ? 'Yes' : 'No'}</p>
        <p><strong>Overlapping Routes:</strong> ${
          overlappingRoutes.length > 0
            ? overlappingRoutes.map(([route]) => route).join(', ')
            : 'None'
        }</p>
      `;
    } catch (error) {
      resultsDiv.innerHTML = `<p class="text-red-600"><strong>Error:</strong> ${error.message}</p>`;
    }
  });
  