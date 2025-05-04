function modifyReportsCommons() {
    // Set current date
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric'
    });

    // Dynamic findings based on report type
    const reportTypeSelect = document.getElementById('reportType');
    const findingsContainer = document.getElementById('findingsContainer');
    const addFindingButton = document.getElementById('addFinding');

    const findingTemplates = {
        blood_test: {
            fields: [
                { label: 'Test', type: 'text', placeholder: 'e.g., Hemoglobin' },
                { label: 'Result', type: 'text', placeholder: 'e.g., 14.2' },
                { label: 'Unit', type: 'text', placeholder: 'e.g., g/dL' },
                { label: 'Normal Range', type: 'text', placeholder: 'e.g., 13.5-17.5' },
                { label: 'Status', type: 'select', options: ['Normal', 'Low', 'High'] }
            ]
        },
        xray: {
            fields: [
                { label: 'Region', type: 'text', placeholder: 'e.g., Lungs' },
                { label: 'Observation', type: 'text', placeholder: 'e.g., Clear lung fields' },
                { label: 'Status', type: 'select', options: ['Normal', 'Abnormal'] }
            ]
        },
        full_body_scan: {
            fields: [
                { label: 'Region', type: 'text', placeholder: 'e.g., Brain' },
                { label: 'Observation', type: 'text', placeholder: 'e.g., No evidence of masses' },
                { label: 'Status', type: 'select', options: ['Normal', 'Abnormal'] }
            ]
        }
    };

    function addFindingRow(fields) {
        const row = document.createElement('div');
        row.className = 'grid grid-cols-3 gap-4 items-center'; // Use CSS classes
        fields.forEach(field => {
            const div = document.createElement('div');
            if (field.type === 'select') {
                const select = document.createElement('select');
                select.className = 'input-select'; // Use CSS class
                select.required = true;
                field.options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.value = option.toLowerCase();
                    opt.textContent = option;
                    select.appendChild(opt);
                });
                div.appendChild(select);
            } else {
                const input = document.createElement('input');
                input.type = field.type;
                input.className = 'input-text'; // Use CSS class
                input.placeholder = field.placeholder;
                input.required = true;
                div.appendChild(input);
            }
            row.appendChild(div);
        });
        findingsContainer.appendChild(row);
    }

    reportTypeSelect.addEventListener('change', () => {
        findingsContainer.innerHTML = '';
        const selectedType = reportTypeSelect.value;
        if (selectedType && findingTemplates[selectedType]) {
            addFindingRow(findingTemplates[selectedType].fields);
            addFindingButton.classList.remove('hidden');
            addFindingButton.classList.add('block');
        } else {
            addFindingButton.classList.remove('block');
            addFindingButton.classList.add('hidden');
        }
    });

    addFindingButton.addEventListener('click', () => {
        const selectedType = reportTypeSelect.value;
        if (selectedType && findingTemplates[selectedType]) {
            addFindingRow(findingTemplates[selectedType].fields);
        }
    });
}
export default modifyReportsCommons;