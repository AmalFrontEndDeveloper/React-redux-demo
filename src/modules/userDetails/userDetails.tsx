import React from 'react';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { userDetailsProps, userDetailsState } from './userDetails-interface';
import { Button } from 'primereact/button';
class UserDetailComponent extends React.Component<userDetailsProps, any> {
    emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };
    constructor(props: userDetailsProps) {
        super(props);
        this.state = {
            products: null,
            productDialog: false,
            product: this.emptyProduct,
            submitted: false,
            globalFilter: null
        };
        this.openNew = this.openNew.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(e: any, name: any) {
        const val = (e.target && e.target.value) || '';
        let product = { ...this.state.product };
        product[`${name}`] = val;

        this.setState({ product });
        console.log('product', product);

    }
    openNew() {
        this.setState({
            product: this.emptyProduct,
            submitted: false,
            productDialog: true
        });
    } hideDialog() {
        this.setState({
            submitted: false,
            productDialog: false
        });
    }
    componentDidMount() {
        this.props.getUserDetailsData();
    }

    render() {
        console.log('this.props', this.props);
        const userComponentData = this.props.userDetailList;
        const header = (
            <div className="table-header">
                <h3 className='card_tittle ugauge_col_size_50 text-left'>User Detatails</h3>
                <Button icon="pi pi-plus" onClick={this.openNew} />
                {/* <Button icon="pi pi-pencil" /> */}
                {/* <Button icon="pi pi-trash" /> */}
            </div>
        );
        return (
            <>



                <Dialog visible={this.state.productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" onHide={this.hideDialog}>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <InputText id="name" value={this.state.product.name} onChange={(e) => this.onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': this.state.submitted && !this.state.product.name })} />
                        {this.state.submitted && !this.state.product.name && <small className="p-error">Name is required.</small>}
                    </div>
                    <div className="field">
                        <label htmlFor="description">Description</label>
                        <InputTextarea id="description" value={this.state.product.description} onChange={(e) => this.onInputChange(e, 'description')} required rows={3} cols={20} />
                    </div>

                </Dialog>
                <div className='p_all_20'>
                    <div className="card ">
                        <DataTable
                            value={userComponentData} paginator rows={10} header={header} selectionMode="single" dataKey="id" responsiveLayout="scroll" stateStorage="session" stateKey="dt-state-demo-session" emptyMessage="No User Details found." >
                            <Column field="name" header="Employee Name" sortable filter filterPlaceholder="Search by name"></Column>
                            <Column field="email" header="Email" sortable filter filterPlaceholder="Search by Email"></Column>
                            <Column field="primarySkills" header="Primary Skills" sortable filter filterPlaceholder="Search by Primary Skills"></Column>
                            <Column field="secondarySkills" header="Secondary Skills" sortable filter filterPlaceholder="Search by Secondary Skills"></Column>
                            <Column field="experience" header="Total Experience" sortable filter filterPlaceholder="Search by Total Experience"></Column>
                            <Column field="designation" header="Designation" sortable filter filterPlaceholder="Search by Designation"></Column>
                        </DataTable>
                    </div>
                </div>
            </>
        )
    }
}

export default UserDetailComponent;