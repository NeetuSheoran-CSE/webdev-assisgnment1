const eventForm=document.getElementById("eventForm");
const eventTitle=document.getElementById("eventTitle");
const eventDate=document.getElementById("eventDate");
const eventCategory=document.getElementById("eventCategory");
const eventDescription=document.getElementById("eventDescription");
const clearAllBtn=document.getElementById("clearAllBtn");
const addSampleBtn=document.getElementById("addSampleBtn");
const eventContainer=document.getElementById("eventContainer");
const demoContent=document.getElementById("demoContent");

const sampleEvents=[
    {
        title:"web dev",
        date:"5-4-2026",
        category:"Workshop",
        description:"usd ius sijjinsf j snen s"
    },
    {
        title:"web dev2",
        date:"4-6-2026",
        category:"Conference",
        description:"bds ius sijjinsf j snen s"
    }
];
function createEventCard(eventData){
   const card=document.createElement("div");

   card.innerHTML=`
   <button class="delete-btn">X</button>
   <h3>${eventData.title}</h3>
   <div>${eventData.date}</div>
   <span>${eventData.category}</span>
   <p>${eventData.description}</p>
   `

   return card;
}
function addEvent(eventData){
    const emptyState=document.querySelector(".empty-state");
    emptyState.remove();


    eventContainer.appendChild(createEventCard(eventData));
}

eventForm.addEventListener("submit",(event)=>{
    event.preventDefault();

    const eventData={
        title:eventTitle.value,
        date:eventDate.value,
        category:eventCategory.value,
        description:eventDescription.value
    }
    addEvent(eventData);
});

clearAllBtn.addEventListener("click",()=>{
    eventContainer.innerHTML=`
    <div class="empty-state">No events yet. Add
    your first event!</div>`
})

addSampleBtn.addEventListener("click",()=>{
    sampleEvents.forEach(addEvent);
})

eventContainer.addEventListener("click",(event)=>{
    //closesr use to target the closestchild element of the targeted element
    const card=event.target.closest('.event-card');//event-card
    console.log(card,"inside line 73");

    if(event.target.classList.contains("delete-btn")){
        card.remove();}

        if(!eventContainer.querySelector(".event-card")){
            eventConatiner.innerHTML=`
            <div class="empty-state">No events yet. Add
            your first event!</div>`
        }

})


