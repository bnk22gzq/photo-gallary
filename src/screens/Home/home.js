import React, { useReducer,useRef,useEffect } from 'react'
import './home.css'
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const slides = [
  {
    title: "Feel like",
    subtitle: "- Less Distance",
    description: "Family is never far away",
    image:
      "https://img.freepik.com/free-photo/medium-shot-senior-man-holding-tablet_23-2149272495.jpg?size=626&ext=jpg&ga=GA1.1.678782819.1680887426&semt=sph"
  },
  {
    title: "Connect with",
    subtitle: "- son and daughter",
    description: "Let your dreams come true",
    image:
      "https://img.freepik.com/free-photo/senior-couple-looking-tablet-medium-shot_23-2148985343.jpg?w=900&t=st=1685478581~exp=1685479181~hmac=daac9f0839eeeeb6c53343bf8ae9c436a0e3a8cf67ce72a5a6d9622c5e4aaa7a"
  },
  {
    title: "Family",
    subtitle: "- memories",
    description: "A piece of heaven",
    image:
      "https://img.freepik.com/free-photo/smiley-old-man-nurse-having-video-call-laptop_23-2148740046.jpg?w=900&t=st=1685478858~exp=1685479458~hmac=5933d9990e2705ea775494ea0943f0caf3933af08d141e632f471570e528e4fe"
  },
  {
    title: "Digital",
    subtitle: "- album",
    description: "A digital album book",
    image:
      "https://img.freepik.com/free-photo/senior-man-text-messaging-mobile-phone-while-wife-is-talking-him-home_637285-10256.jpg?w=900&t=st=1685478947~exp=1685479547~hmac=4eda50fc1742fdaee4c2be92864fbf4008a76afef813b9c2c896943c44f80c02"
  },
  {
    title: "Watch ",
    subtitle: "- Family photo",
    description: "Digitally family reunion",
    image:
      "https://img.freepik.com/free-photo/modern-seniors-taking-picture-themselves_1098-13089.jpg?w=900&t=st=1685480339~exp=1685480939~hmac=51102d1e62b923498da48c84034fac629d284d3e9d63f27e561a7aa81186b5c8"
  }
];

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
        <MuiThemeProvider theme={theme}>
            <Typography variant="h5" gutterBottom > 
                {slide.title}
            </Typography>
            <Typography variant="h5" gutterBottom >
                 {slide.subtitle}
            </Typography>
            <Typography variant="p" gutterBottom>
                {slide.description}
            </Typography>
          {/* <h2 className="slideTitle"></h2> */}
          {/* <h3 className="slideSubtitle"></h3> */}
          {/* <p className="slideDescription"></p> */}
        </MuiThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default function Home()
{
    const [state, dispatch] = useReducer(slidesReducer, initialState);
    
    return (
      <body>
        <div className='slide' style={{overflow:'hidden', padding: '90px'} } >
                <div className="slides">
                          <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
                          
                          {[...slides, ...slides, ...slides].map((slide, i) => {
                            let offset = slides.length + (state.slideIndex - i);
                            return <Slide slide={slide} offset={offset} key={i} />;
                          })}
                          <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
                        
                </div>
         </div> 
        
        
       
      </body>
      
    )
  
}