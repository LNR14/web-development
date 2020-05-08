import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// library.add(
//   fab,
//   faCoffee,
//   faCog,
//   faSpinner,
//   faQuoteLeft,
//   faSquare,
//   faCheckSquare
// )

// export default class testing extends Component {
//   render() {
//     return (
//       <div>
//         <main className="w-100 min-vh-100 bg-gray8 white sans-serif pa6 flex flex-column justify-center items-center">
//           <div className="mw8 center overflow-hidden">
//             <h2 className="tc ttu tracked3 b f2 mt0 mb2 teal0 o-30">
//               react-fontawesome
//             </h2>

//             <i class="fas fa-exclamation-triangle"></i>
//             <ul className="list ma0 pa0 flex flex-row flex-wrap teal4">
//               <li className="pv3 ph2 ma0 link grow">
//                 <FontAwesomeIcon icon={['fab', 'font-awesome']} size="9x" />
//               </li>
//               <li className="pv3 ph2 ma0 link grow">
//                 <FontAwesomeIcon icon={faCoffee} size="4x" />
//               </li>
//               <li className="pv3 ph2 ma0 link grow">
//                 <FontAwesomeIcon
//                   icon={['fas', 'cog']}
//                   spin
//                   fixedWidth={false}
//                   size="4x"
//                 />
//               </li>
//               <li className="pv3 ph2 ma0 link grow">
//                 <FontAwesomeIcon
//                   icon={['fas', 'spinner']}
//                   pulse
//                   fixedWidth
//                   size="4x"
//                 />
//               </li>
//               <li className="pv3 ph2 ma0 link grow">
//                 <FontAwesomeIcon
//                   icon={['fab', 'fort-awesome']}
//                   rotation={90}
//                   size="4x"
//                 />
//               </li>
//               <li className="pv3 ph2 ma0 link grow">
//                 <FontAwesomeIcon
//                   icon={['fab', 'internet-explorer']}
//                   flip="both"
//                   size="4x"
//                 />
//               </li>
//               <li className="pv3 ph2 ma0 link grow">
//                 <FontAwesomeIcon
//                   icon={['fab', 'fort-awesome']}
//                   inverse
//                   size="4x"
//                 />
//               </li>
//               <li className="pv3 ph2 ma0 link grow">
//                 <FontAwesomeIcon
//                   icon={['fab', 'font-awesome']}
//                   size="4x"
//                   transform="left-1 rotate-15"
//                 />
//               </li>
//             </ul>
//           </div>
//         </main>
//       </div>
//     )
//   }
// }


export default class testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-05-05T00:00:00Z&to=2020-05-05T00:00:00Z")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          Something
          {console.log(items[items.length-1].Cases)}
        </div>
      );
    }
  }
}