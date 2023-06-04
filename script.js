'use strict';

function handleFrameData() {
  const iframeWindow = document.getElementById('Frame').contentWindow;
  const iframeDocument = iframeWindow.document;

  const title = iframeDocument.getElementById('Title');
  const value = iframeDocument.getElementById('Value');
  const currency = iframeDocument.getElementById('Currency');
  const person = iframeDocument.getElementById('Person');
  const organization = iframeDocument.getElementById('Organization');
  const date = iframeDocument.getElementById('Date');
  const status = iframeDocument.getElementById('Status');


  const dealData = {
    title: title.value,
    value: value.value,
    currency: currency.value,
    person_id: person.value,
    org_id: organization.value,
    expected_close_date: date.value,
    status: status.value
  };

  const API_KEY = 'e6b5fdbcc869712300fefc9302fd07d55415f7b9';
  const API_URL = `https://api.pipedrive.com/v1/deals?api_token=${API_KEY}`;

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify(dealData)
  })
  .then(response => {
    if (response.ok) {
      alert('Deal added');
    } else {
      throw new Error('Something went wrong');
    }
  })
  .catch(error => alert(error));
}