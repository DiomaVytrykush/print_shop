import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { customFileInput } from './../Common/FormsControls/FormsControls';
import { Input } from './../Common/FormsControls/FormsControls';
import { required, maxLength13, minLength5 } from './../Helpers/Validators/Validators';

// OrderForm = (props) => {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <div className="buyer__order">
    //                 <div className="buyer__name__number">
    //                     <h2>Дані покупця</h2>
    //                     <div>
    //                         <Field
    //                             name="firstName"
    //                             placeholder="Введіть ПІБ"
    //                             validate={required}
    //                             component={Input}
    //                             type="text" />
    //                     </div>
    //                     <div>
    //                         <Field
    //                             name="phoneNumber"
    //                             placeholder="Введіть номер телефону"
    //                             validate={[required, maxLength13, minLength5]}
    //                             component={Input}
    //                             type="number"
    //                         />
    //                     </div>
    //                 </div>
    //                 <div className="buyer__location">
    //                     <h2>Доставка</h2>
    //                     <div>
    //                         <Field name="postCityArea"
    //                             component="select"
    //                             value={this.state.postCityArea}
    //                             onChange={e => this.setState({ postCityArea: e.target.value })}> >
    //                             <option>Виберіть область</option>
    //                             {
    //                                 this.props.postDataArea.map(p =>
    //                                     <option key={p.Ref}>{p.Description}</option>
    //                                 )
    //                             }
    //                         </Field>
    //                     </div>
    //                     <div>
    //                         <Field name="postCity"
    //                             component="select"
    //                             value={this.state.postCity}
    //                             onChange={e => this.setState({ postCity: e.target.value })}>
    //                             <option>Виберіть місто</option>
    //                             {
    //                                 this.props.postDataCity.map(p =>
    //                                     <option key={p.CityID}>{p.Description}</option>
    //                                 )
    //                             }
    //                         </Field>
    //                     </div>
    //                     <div>
    //                         <Field name="postNumber"
    //                             placeholder="Введіть номер відділенння"
    //                             validate={required}
    //                             component={Input}
    //                             type="text"
    //                             value={this.state.postNumber}
    //                             onChange={e => this.setState({ postNumber: e.target.value })} />
    //                     </div>
    //                 </div>
    //                 <div className="buyer__file">
    //                     <Field name="file"
    //                         type="file"
    //                         component={customFileInput} />
    //                 </div>
    //             </div>
    //             <button className="buyer__submit" type="submit">Оформити заказ</button>
    //         </form >
    //     )
    // }

    // LoginOrderForm = reduxForm({ form: 'order' })(this.OrderForm)
