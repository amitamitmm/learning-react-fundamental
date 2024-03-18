const person = {
    name: 'Amit Choudhary',
    address: {
        addressLine1: 'DDA Flat No 15',
        addressLine2: 'Pocket B-1 Ekta Aparment Siraspur',
        city: 'New Delhi',
        country: 'India'
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => person.profiles.map(
        profile => console.log(profile)
    )

}

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.addressLine1}</div>
            <div>{person.profiles[1]}</div>
            <button className="btn btn-primary" onClick={person.printProfile}>
                Print Profile
            </button>
        </>
    )
}