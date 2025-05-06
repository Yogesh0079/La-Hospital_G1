document.addEventListener('DOMContentLoaded', function() {
    // Bed details modal functionality
    const bedCards = document.querySelectorAll('.bed-card');
    const bedDetailsModal = document.getElementById('bedDetailsModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeAddWardModalBtn = document.getElementById('closeAddWardModalBtn');
    const cancelAddWardBtn = document.getElementById('cancelAddWardBtn');
    const addWardModal = document.getElementById('addWardModal');
    const addWardBtn = document.getElementById('addWardBtn');
    
    // Show bed details when a bed card is clicked
    bedCards.forEach(card => {
        card.addEventListener('click', function() {
            const bedId = this.getAttribute('data-bed-id');
            const status = this.getAttribute('data-status');
            
            // Update modal with bed details
            document.getElementById('modalBedNumber').textContent = bedId;
            
            // Update status display
            const statusElement = document.getElementById('modalStatus');
            statusElement.textContent = status.charAt(0).toUpperCase() + status.slice(1);
            statusElement.className = 'px-2 py-1 rounded-full text-sm';
            
            if (status === 'available') {
                statusElement.classList.add('bg-green-100', 'text-green-800');
                document.getElementById('patientInfoSection').style.display = 'none';
                document.getElementById('maintenanceInfoSection').style.display = 'none';
                document.getElementById('reservationInfoSection').style.display = 'none';
            } else if (status === 'occupied') {
                statusElement.classList.add('bg-red-100', 'text-red-800');
                document.getElementById('patientInfoSection').style.display = 'block';
                document.getElementById('maintenanceInfoSection').style.display = 'none';
                document.getElementById('reservationInfoSection').style.display = 'none';
                
                // Simulate patient data
                if (bedId === '102') {
                    document.getElementById('modalPatientName').textContent = 'John Doe';
                    document.getElementById('modalPatientId').textContent = '78945';
                    document.getElementById('modalAdmissionDate').textContent = '12/05/2023';
                    document.getElementById('modalDiagnosis').textContent = 'Pneumonia';
                } else if (bedId === '106') {
                    document.getElementById('modalPatientName').textContent = 'Robert Johnson';
                    document.getElementById('modalPatientId').textContent = '78235';
                    document.getElementById('modalAdmissionDate').textContent = '10/05/2023';
                    document.getElementById('modalDiagnosis').textContent = 'Fractured femur';
                }
            } else if (status === 'maintenance') {
                statusElement.classList.add('bg-blue-100', 'text-blue-800');
                document.getElementById('patientInfoSection').style.display = 'none';
                document.getElementById('maintenanceInfoSection').style.display = 'block';
                document.getElementById('reservationInfoSection').style.display = 'none';
                
                // Simulate maintenance data
                if (bedId === '103') {
                    document.getElementById('modalMaintenanceReason').textContent = 'Equipment repair';
                    document.getElementById('modalReportedBy').textContent = 'Nurse Amy (ID: 234)';
                    document.getElementById('modalEstCompletion').textContent = '18/05/2023';
                    document.getElementById('modalMaintenanceNotes').textContent = 'Bedside monitor needs replacement';
                } else if (bedId === '108') {
                    document.getElementById('modalMaintenanceReason').textContent = 'Ventilator replacement';
                    document.getElementById('modalReportedBy').textContent = 'Dr. Smith (ID: 112)';
                    document.getElementById('modalEstCompletion').textContent = '20/05/2023';
                    document.getElementById('modalMaintenanceNotes').textContent = 'Waiting for new ventilator delivery';
                }
            } else if (status === 'reserved') {
                statusElement.classList.add('bg-yellow-100', 'text-yellow-800');
                document.getElementById('patientInfoSection').style.display = 'none';
                document.getElementById('maintenanceInfoSection').style.display = 'none';
                document.getElementById('reservationInfoSection').style.display = 'block';
                
                // Simulate reservation data
                document.getElementById('modalReservedFor').textContent = 'Jane Smith';
                document.getElementById('modalExpectedAdmission').textContent = '15/05/2023';
                document.getElementById('modalReservationReason').textContent = 'Scheduled surgery';
                document.getElementById('modalBookedBy').textContent = 'Dr. Lee (ID: 456)';
            }
            
            // Show the modal
            bedDetailsModal.classList.remove('hidden');
        });
    });
    
    // Close modal when close button is clicked
    closeModalBtn.addEventListener('click', function() {
        bedDetailsModal.classList.add('hidden');
    });
    
    // Add ward modal functionality
    addWardBtn.addEventListener('click', function() {
        addWardModal.classList.remove('hidden');
    });
    
    closeAddWardModalBtn.addEventListener('click', function() {
        addWardModal.classList.add('hidden');
    });
    
    cancelAddWardBtn.addEventListener('click', function() {
        addWardModal.classList.add('hidden');
    });
    
    // Ward selection functionality
    const wardItems = document.querySelectorAll('.ward-item');
    wardItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all wards
            wardItems.forEach(i => {
                i.classList.remove('bg-blue-50', 'border-l-4', 'border-blue-500');
                i.classList.add('hover:bg-gray-50');
            });
            
            // Add active class to selected ward
            this.classList.add('bg-blue-50', 'border-l-4', 'border-blue-500');
            this.classList.remove('hover:bg-gray-50');
            
            // In a real app, this would load the beds for the selected ward
            const wardName = this.querySelector('h3').textContent;
            document.querySelector('#bedManagement h2').textContent = wardName;
        });
    });
    
    // Simulate bed assignment
    const assignButtons = document.querySelectorAll('.bed-available button.bg-green-500');
    assignButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the bed card click
            const bedCard = this.closest('.bed-card');
            const bedNumber = bedCard.querySelector('h3').textContent;
            
            alert(`Assigning ${bedNumber}\nIn a real application, this would open a patient selection dialog.`);
        });
    });
    
    // Simulate bed discharge
    const dischargeButtons = document.querySelectorAll('.bed-occupied button.bg-gray-500');
    dischargeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the bed card click
            const bedCard = this.closest('.bed-card');
            const bedNumber = bedCard.querySelector('h3').textContent;
            const patientName = bedCard.querySelector('.fa-user').parentElement.textContent.trim().split(' ')[1];
            
            if (confirm(`Discharge ${patientName} from ${bedNumber}?`)) {
                alert(`Patient discharged from ${bedNumber}\nIn a real application, this would update the database and refresh the bed status.`);
            }
        });
    });
    
    // Simulate bed maintenance completion
    const maintenanceButtons = document.querySelectorAll('.bed-maintenance button.bg-blue-500');
    maintenanceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the bed card click
            const bedCard = this.closest('.bed-card');
            const bedNumber = bedCard.querySelector('h3').textContent;
            
            if (confirm(`Mark ${bedNumber} as ready for use?`)) {
                alert(`Bed ${bedNumber} marked as available\nIn a real application, this would update the database and refresh the bed status.`);
            }
        });
    });
    
    // Simulate reservation cancellation
    const cancelButtons = document.querySelectorAll('.bed-reserved button.bg-yellow-500');
    cancelButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the bed card click
            const bedCard = this.closest('.bed-card');
            const bedNumber = bedCard.querySelector('h3').textContent;
            const patientName = bedCard.querySelector('.fa-user').parentElement.textContent.trim().split('for: ')[1];
            
            if (confirm(`Cancel reservation for ${patientName} on ${bedNumber}?`)) {
                alert(`Reservation for ${bedNumber} cancelled\nIn a real application, this would update the database and refresh the bed status.`);
            }
        });
    });
});