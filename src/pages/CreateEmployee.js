


import Header from '../componants/Header';
import Form from '../componants/Form';




function CreateEmployeePage ({handleSubmit}){

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Create Employee</h2>
                <Form handleSubmit={handleSubmit} />
            </div>
         </div>
      );
}

export default CreateEmployeePage