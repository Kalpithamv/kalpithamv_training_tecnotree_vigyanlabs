// Store policies data
let policies = [];

// Add policy form
const addPolicyForm = document.getElementById('add-policy-form');
addPolicyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const policyNumber = document.getElementById('policy-number').value;
  const policyType = document.getElementById('policy-type').value;
  const policyHolder = document.getElementById('policy-holder').value;
  const policyAmount = document.getElementById('policy-amount').value;
  const policy = {
    policyNumber: policyNumber,
    policyType: policyType,
    policyHolder: policyHolder,
    policyAmount: policyAmount
  };
  policies.push(policy);
  displayPolicyList();
  addPolicyForm.reset();
});

// Display policy list
const policyListContainer = document.getElementById('policy-list-container');

function displayPolicyList() {
  policyListContainer.innerHTML = '';
  if (policies.length > 0) {
    policyListContainer.style.display = 'block';
    policies.forEach(policy => {
      const li = document.createElement('li');
      li.textContent = `Policy Number: ${policy.policyNumber} | Policy Type: ${policy.policyType} | Policy Holder: ${policy.policyHolder} | Policy Amount: $${policy.policyAmount}`;
      policyListContainer.appendChild(li);
    });
  } else {
    policyListContainer.style.display = 'none';
  }
}

// View policy details
policyListContainer.addEventListener('click', (e) => {
  const selectedPolicyNumber = e.target.textContent.split(' ')[2];
  const policy = policies.find(policy => policy.policyNumber === selectedPolicyNumber);
  if (policy) {
    const policyDetailsContainer = document.getElementById('policy-details-container');
    policyDetailsContainer.textContent = `Policy Number: ${policy.policyNumber}\nPolicy Type: ${policy.policyType}\nPolicy Holder: ${policy.policyHolder}\nPolicy Amount: $${policy.policyAmount}`;
    policyDetailsContainer.parentElement.style.display = 'block';
  }
});

// Claim policy form
const claimPolicyForm = document.getElementById('claim-policy-form');
claimPolicyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const policyNumber = document.getElementById('policy-number-claim').value;
  const policy = policies.find(policy => policy.policyNumber === policyNumber);
  if (policy) {
    alert(`Policy Number: ${policy.policyNumber} | Policy Type: ${policy.policyType} | Policy Holder: ${policy.policyHolder} | Policy Amount: $${policy.policyAmount} is claimed successfully.`);
  } else {
    alert('Policy not found. Please enter a valid policy number.');
  }
  claimPolicyForm.reset();
});

// Change policy form
const changePolicyForm = document.getElementById('change-policy-form');
changePolicyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const policyNumber = document.getElementById('policy-number-change').value;
  const newPolicyAmount = document.getElementById('new-policy-amount').value;
  const policy = policies.find(policy => policy.policyNumber === policyNumber);
  if (policy) {
    policy.policyAmount = newPolicyAmount;
    alert(`Policy Number: ${policy.policyNumber} | Policy Type: ${policy.policyType} | Policy Holder: ${policy.policyHolder}'s policy amount is changed to $${policy.policyAmount} successfully.`);
  } else {
    alert('Policy not found. Please enter a valid policy number.');
  }
  changePolicyForm.reset();
});

// Show/hide forms
document.getElementById('policy-form').style.display = 'block';

document.getElementById('policy-list').addEventListener('click', () => {
  document.getElementById('policy-form').style.display = 'none';
  document.getElementById('policy-details').style.display = 'none';
  document.getElementById('claim-policy-form').style.display = 'none';
document.getElementById('change-policy-form').style.display = 'none';
policyListContainer.style.display = 'block';
});

document.getElementById('add-policy').addEventListener('click', () => {
document.getElementById('policy-form').style.display = 'block';
document.getElementById('policy-details').style.display = 'none';
document.getElementById('claim-policy-form').style.display = 'none';
document.getElementById('change-policy-form').style.display = 'none';
policyListContainer.style.display = 'none';
});

document.getElementById('claim-policy').addEventListener('click', () => {
document.getElementById('policy-form').style.display = 'none';
document.getElementById('policy-details').style.display = 'none';
document.getElementById('claim-policy-form').style.display = 'block';
document.getElementById('change-policy-form').style.display = 'none';
policyListContainer.style.display = 'none';
});

document.getElementById('change-policy').addEventListener('click', () => {
document.getElementById('policy-form').style.display = 'none';
document.getElementById('policy-details').style.display = 'none';
document.getElementById('claim-policy-form').style.display = 'none';
document.getElementById('change-policy-form').style.display = 'block';
policyListContainer.style.display = 'none';
});

document.getElementById('view-policy').addEventListener('click', () => {
document.getElementById('policy-form').style.display = 'none';
document.getElementById('policy-details').style.display = 'block';
document.getElementById('claim-policy-form').style.display = 'none';
document.getElementById('change-policy-form').style.display = 'none';
policyListContainer.style.display = 'none';
});
