// import React, { Component } from 'react';
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';

// class ModalPage extends React.Component {
//     state = {
//         modal11: false
//     }

//     toggle = nr => () => {
//         let modalNumber = 'modal' + nr
//         this.setState({
//             [modalNumber]: !this.state[modalNumber]
//         });
//     }

//     render() {
//         return (
//             <MDBContainer>
//                 <MDBBtn color="dark" onClick={this.toggle(11)}>Оформити заказ</MDBBtn>
//                 <MDBModal isOpen={this.state.modal11} toggle={this.toggle(11)} frame position="top">
//                     <MDBModalBody className="text-center">
//                         <p>Ваш заказ оформленно , чекайте дзвінка.</p>
//                         <MDBBtn className="buyer__submit" type="submit" color="dark" onClick={this.toggle(11)}>Закрити</MDBBtn>
//                     </MDBModalBody>
//                 </MDBModal>
//             </MDBContainer>
//         );
//     }
// }

// export default ModalPage;

