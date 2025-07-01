import "./Rooms.css"
// import "../room/Room.css"

const Rooms = () => {
  return (
    <section id="rooms">
        <div className="sec_title">
                <h3 style={{marginBottom: "40px", paddingTop: "60px"}}>Our Rooms</h3>
            </div>
        <div className="container8">
            
            <div className="room_cards">
                <div className='cardd'>
        <img className='cardd_img' src="https://themewagon.github.io/deluxe/images/room-1.jpg" alt="" />
        <div className="cardd_content">
            <h1 className="cardd_title">Suite Room</h1>
            <div className="cardd_price">
               <p className="price">$120.00</p> 
               <span className="per-night">per night</span>
               <hr className="divider" />
               
            </div>
        </div>
        <div className="detaill">
                <a className="room-link" href="#">View Room Details →</a>
               </div>
    </div>
                <div className='cardd'>
        <img className='cardd_img' src="https://themewagon.github.io/deluxe/images/room-2.jpg" alt="" />
        <div className="cardd_content">
            <h1 className="cardd_title">Family Room</h1>
            <div className="cardd_price">
               <p className="price">$20.00</p> 
               <span className="per-night">per night</span>
               <hr className="divider" />

            </div>
        </div>
                       <div className="detaill">
                <a className="room-link" href="#">View Room Details →</a>
               </div>
    </div>
    <div className='cardd'>
        <img className='cardd_img' src="https://themewagon.github.io/deluxe/images/room-3.jpg" alt="" />
        <div className="cardd_content">
            <h1 className="cardd_title">Deluxe Room</h1>
            <div className="cardd_price">
               <p className="price">$150.00</p> 
               <span className="per-night">per night</span>
               <hr className="divider" />
               
            </div>
        </div>
        <div className="detaill">
                <a className="room-link" href="#">View Room Details →</a>
               </div>
    </div>
    <div className='cardd'>
        <img className='cardd_img' src="https://themewagon.github.io/deluxe/images/room-4.jpg" alt="" />
        <div className="cardd_content">
            <h1 className="cardd_title">Classic Room</h1>
            <div className="cardd_price">
               <p className="price">$130.00</p> 
               <span className="per-night">per night</span>
               <hr className="divider" />
               
            </div>
        </div>
        <div className="detaill">
                <a className="room-link" href="#">View Room Details →</a>
               </div>
    </div>
    <div className='cardd'>
        <img className='cardd_img' src="https://themewagon.github.io/deluxe/images/room-5.jpg" alt="" />
        <div className="cardd_content">
            <h1 className="cardd_title">Superior Room</h1>
            <div className="cardd_price">
               <p className="price">$300.00</p> 
               <span className="per-night">per night</span>
               <hr className="divider" />
               
            </div>
        </div>
        <div className="detaill">
                <a className="room-link" href="#">View Room Details →</a>
               </div>
    </div>
    <div className='cardd'>
        <img className='cardd_img' src="https://themewagon.github.io/deluxe/images/room-6.jpg" alt="" />
        <div className="cardd_content">
            <h1 className="cardd_title">Luxury Room</h1>
            <div className="cardd_price">
               <p className="price">$500.00</p> 
               <span className="per-night">per night</span>
               <hr className="divider" />
               
            </div>
        </div>
        <div className="detaill">
                <a className="room-link" href="#">View Room Details →</a>
               </div>
    </div>
            </div>
        </div>
    </section>
  )
}

export default Rooms