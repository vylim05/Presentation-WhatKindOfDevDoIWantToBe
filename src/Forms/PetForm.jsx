import './PetForm.css';

function PetForm() {
  return (
    <div className="pet-form">
      <p>Do you like cats and/or dogs?</p>
    
      <span>
        <input type="checkbox" id="cat" name="pet" value="Cat" /> //the original id were identical, we switched them and their html 
        <label htmlFor="cat">Cats 😻</label>
        </span>
        <span>
        <br />
        <input type="checkbox" id="dog" name="pet" value="Dog" />          
        <label htmlFor="dog">Dogs 🐶</label>
      </span>
    </div>
  );
}

export default PetForm;
