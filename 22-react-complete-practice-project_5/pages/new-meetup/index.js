import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    async function addMeetupHandler(enteredMeetupData) {
        console.log('fetch send1');
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('fetch send2');
        const data = await response.json();

        console.log(data);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
}

export default NewMeetupPage;