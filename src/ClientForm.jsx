import React, { useState } from 'react';

    function ClientForm() {
      const [clientName, setClientName] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle client submission logic here
        console.log('Client Name:', clientName);
      };

      return (
        <form onSubmit={handleSubmit}>
          <h2>Add Client</h2>
          <input
            type="text"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />
          <button type="submit">Add Client</button>
        </form>
      );
    }

    export default ClientForm;
