export const formFields = {
    certificates: [
        { name: "fullName", label: "Full Name", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "birthday", label: "Birthday", type: "date" },
        { name: "status", label: "Status", type: "text" },
        { name: "age", label: "Age", type: "number" },
        { name: "years_living", label: "Years Living", type: "number" },
        { name: "sitio", label: "Sitio Location", type: "text" },
        { name: "purpose", label: "Purpose", type: "text" },
    ],
    print_materials: [
        { name: "phone_number", label: "Phone Number", type: "tel" },
        { name: "file", label: "File", type: "file" },
        { name: "copies", label: "Number of Copies", type: "number" },
        { name: "type", label: "Type of Print", type: "select", options: ["Colored", "B&W"] },
    ],
    partnership: [
        { name: "phone_number", label: "Phone Number", type: "tel" },
        { name: "company_name", label: "Company Name", type: "text" },
        { name: "company_address", label: "Company Address", type: "text" },
        { name: "company_email", label: "Company Email", type: "email" },
        { name: "company_phone_number", label: "Company Phone Number", type: "tel" },
        { 
            name: "area_of_participation", 
            label: "Area of Participation", 
            type: "select", 
            options: ["Environment", "Education", "Health", "Agriculture", "Economic Empowerment", "Governance", "Peace Building", "Social Inclusion"]
        },
        { name: "company_partnership_purpose", label: "Company Partnership Purpose", type: "text" },
        { name: "file", label: "Proposal Letter/Plan", type: "file" },
    ],
    vehicle_reservation: [
        { name: "phone_number", label: "Phone Number", type: "tel" },
        { 
            name: "vehicle_type", 
            label: "Vehicle Type", 
            type: "select", 
            options: ["L300_B8", "L300_B9", "CoasterBus"] 
        },
        { name: "destination", label: "Destination", type: "text" },
        { name: "purpose", label: "Purpose", type: "text" },
        { name: "date", label: "Date", type: "date" },
        { name: "time", label: "Time", type: "time" },
    ],
    gym_reservation: [
        { name: "phone_number", label: "Phone Number", type: "tel" },
        { name: "purpose", label: "Purpose", type: "text" },
        { name: "date", label: "Date", type: "date" },
        { name: "time", label: "Time", type: "time" },
    ]
};

export const serviceButtonLabels = {
        certificates: "Request Certificates",
        print_materials: "Send Print Materials",
        partnership: "Request Partnership",
        vehicle_reservation: "Request Vehicle",
        gym_reservation: "Request Gym",
};

export const serviceTitle = {
    certificates: "Certificate",
    print_materials: "Print Material",
    partnership: "Partnership",
    vehicle_reservation: "Vehicle",
    gym_reservation: "Gym",
};