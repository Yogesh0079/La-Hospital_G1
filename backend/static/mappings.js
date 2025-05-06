const userTypeMap = {
    0: "patient",
    1: "doctor",
    2: "admin",
    3: "staff"
};
const prescriptionsMap = [
    // Pain relievers / Anti-inflammatory
    "Paracetamol",
    "Ibuprofen",
    "Aspirin",
    "Naproxen",
    "Diclofenac",
    "Tramadol",
    "Celecoxib",

    // Antibiotics
    "Amoxicillin",
    "Ciprofloxacin",
    "Azithromycin",
    "Doxycycline",
    "Clindamycin",
    "Metronidazole",
    "Ceftriaxone",

    // Antihistamines / Allergy meds
    "Loratadine",
    "Cetirizine",
    "Fexofenadine",
    "Diphenhydramine",
    "Chlorpheniramine",

    // Antacids / GERD treatment
    "Omeprazole",
    "Pantoprazole",
    "Ranitidine",
    "Esomeprazole",
    "Famotidine",

    // Cholesterol / Cardiovascular
    "Simvastatin",
    "Atorvastatin",
    "Lisinopril",
    "Losartan",
    "Amlodipine",
    "Clopidogrel",
    "Warfarin",

    // Antidiabetics
    "Metformin",
    "Glipizide",
    "Insulin",
    "Sitagliptin",
    "Empagliflozin",

    // Respiratory
    "Albuterol",
    "Montelukast",
    "Fluticasone",
    "Budesonide",

    // Antidepressants / Anti-anxiety
    "Sertraline",
    "Fluoxetine",
    "Citalopram",
    "Escitalopram",
    "Venlafaxine",
    "Amitriptyline",

    // Antivirals
    "Oseltamivir",
    "Acyclovir",
    "Valacyclovir",
    "Remdesivir",

    // Others
    "Prednisone",
    "Hydrochlorothiazide",
    "Levothyroxine",
    "Diazepam",
    "Gabapentin",
    "Melatonin",
    "Hydroxychloroquine"
  ];

const itemTypeMap = {
    0: "OTC drugs",
    1: "prescription drugs",
    2: "medical devices",
    3: "surgical instruments",
    4: "diagnostic equipment",
    5: "medical supplies",
    6: "surgical supplies",
    7: "other"
}

const deptMap = {
    0: "Cardiology",
    1: "Dermatology",
    2: "Endocrinology",
    3: "Gastroenterology",
    4: "Hematology",
    5: "Infectious Diseases",
    6: "Nephrology",
    7: "Neurology",
    8: "Oncology",
    9: "Ophthalmology",
    10: "Orthopedics",
    11: "Pediatrics",
    12: "Psychiatry",
    13: "Pulmonology",
    14: "Radiology",
    15: "Rheumatology",
    16: "Urology"
}

const testTypeMap = {
    0: "blood test",
    1: "urine test",
    2: "imaging test",
    3: "biopsy",
    5: "MRI",
    6: "CT scan",
    7: "X-ray",
    8: "ultrasound",
    9: "PET scan",
    10: "ECG",
    11: "EEG",
    12: "endoscopy",
    13: "colonoscopy",
    14: "stool test",
    15: "pap smear",
    16: "mammogram",
    17: "allergy test",
    18: "genetic test",
    19: "thyroid function test",
    20: "liver function test",
    21: "kidney function test",
    22: "glucose tolerance test",
    23: "cholesterol test",
    24: "spirometry",
    25: "bone density scan (DEXA)",
    26: "prostate-specific antigen (PSA) test",
    27: "hearing test (audiometry)",
    28: "eye exam",
    29: "skin test (tuberculosis/Mantoux)",
    30: "HbA1c test"
};

export {userTypeMap, itemTypeMap, testTypeMap, deptMap, prescriptionsMap};