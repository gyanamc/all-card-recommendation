export const MOCK_RESPONSE = {
    html: `
    <h2>Top 3 Credit Cards for You</h2>
    <p>Based on your spending habits, here are the best matches:</p>
    
    <div class="table-wrapper">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr>
          <th class="border-b p-2">Card Name</th>
          <th class="border-b p-2">Annual Fee</th>
          <th class="border-b p-2">Reward Rate</th>
          <th class="border-b p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-100">
          <td class="p-2 border-b font-medium">HDFC Regalia Gold</td>
          <td class="p-2 border-b">₹2,500</td>
          <td class="p-2 border-b">4%</td>
          <td class="p-2 border-b">
            <a href='#' class='inline-block bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium'>Apply Now</a>
          </td>
        </tr>
        <tr class="hover:bg-gray-100">
          <td class="p-2 border-b font-medium">SBI Cashback</td>
          <td class="p-2 border-b">₹999</td>
          <td class="p-2 border-b">5%</td>
          <td class="p-2 border-b">
            <a href='#' class='inline-block bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium'>Apply Now</a>
          </td>
        </tr>
        <tr class="hover:bg-gray-100">
          <td class="p-2 border-b font-medium">Axis Magnus</td>
          <td class="p-2 border-b">₹12,500</td>
          <td class="p-2 border-b">6.5%</td>
          <td class="p-2 border-b">
            <a href='#' class='inline-block bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium'>Apply Now</a>
          </td>
        </tr>
      </tbody>
    </table>
    </div>

    <h3>Why these cards?</h3>
    <ul>
      <li><strong>HDFC Regalia:</strong> Best for travel and lounge access.</li>
      <li><strong>SBI Cashback:</strong> Unbeatable 5% online cashback.</li>
      <li><strong>Axis Magnus:</strong> Premium lifestyle benefits.</li>
    </ul>

    <p>Would you like to compare fees in detail?</p>
  `
};

export const INITIAL_MESSAGE = {
    role: 'ai',
    content: `<p>Hello! I'm your <strong>Gyanam AI Advisor</strong>.</p><p>I can help you find the perfect credit card based on your lifestyle using real-time data.</p><p>Try asking: <em>"Which card is best for online shopping?"</em></p>`,
    timestamp: 'Just now'
};
