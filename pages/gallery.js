import GalleryPic from '@/components/GalleryPic';
import React from 'react';

const Gallery = () => {
    const galleryImages = [
        {
            img:'/gallery/a1.jpg',
        },
        {
            img:'/gallery/a2.jpg',
        },
        {
            img:'/gallery/a3.jpg',
        },
        {
            img:'/gallery/a4.jpg',
        },
        {
            img:'/gallery/a5.jpg',
        },
        {
            img:'/gallery/a6.jpg',
        },
        {
            img:'/gallery/a7.jpg',
        },
        {
            img:'/gallery/a8.jpg',
        },
        {
            img:'/gallery/a9.jpg',
        },
        {
            img:'/gallery/a10.jpg',
        },
        {
            img:'/gallery/a11.png',
        },
        {
            img:'/gallery/a12.jpg',
        },
        {
            img:'/gallery/a13.jpg',
        },
        {
            img:'/gallery/a14.jpg',
        },
        {
            img:'/gallery/a15.jpg',
        },
        {
            img:'/gallery/a16.jpg',
        },
        {
            img:'/gallery/a17.jpg',
        },
        {
            img:'/gallery/a18.jpg',
        },
        {
            img:'/gallery/a19.jpg',
        },
        {
            img:'/gallery/a20.jpg',
        },
        {
            img:'/gallery/a21.jpg',
        },
        {
            img:'/gallery/a22.jpg',
        },
        {
            img:'/gallery/a23.jpg',
        },
        {
            img:'/gallery/a24.jpg',
        }, {
            img:'/gallery/a25.jpg',
        }, {
            img:'/gallery/a26.jpg',
        }, {
            img:'/gallery/a27.jpg',
        }, {
            img:'/gallery/a28.jpg',
        }, {
            img:'/gallery/a29.jpg',
        }, {
            img:'/gallery/a30.jpg',
        }, {
            img:'/gallery/a31.jpg',
        }, {
            img:'/gallery/a32.jpg',
        }, {
            img:'/gallery/a33.jpg',
        }, {
            img:'/gallery/a34.jpg',
        }, {
            img:'/gallery/a35.jpg',
        }, {
            img:'/gallery/a36.jpg',
        }, {
            img:'/gallery/a37.jpg',
        }, {
            img:'/gallery/a38.jpg',
        }, {
            img:'/gallery/a39.jpg',
        }, {
            img:'/gallery/a40.jpg',
        }, {
            img:'/gallery/a41.jpg',
        }, {
            img:'/gallery/a42.jpg',
        }, {
            img:'/gallery/a43.jpg',
        }, {
            img:'/gallery/a44.jpg',
        }, {
            img:'/gallery/a45.jpg',
        }, {
            img:'/gallery/a46.jpg',
        }, {
            img:'/gallery/a47.jpg',
        }, {
            img:'/gallery/a48.jpg',
        }, {
            img:'/gallery/a49.jpg',
        }, {
            img:'/gallery/a50.jpg',
        }, {
            img:'/gallery/a51.jpg',
        }, {
            img:'/gallery/a52.jpg',
        }, {
            img:'/gallery/a53.jpg',
        }, {
            img:'/gallery/a54.jpg',
        }, {
            img:'/gallery/a55.jpg',
        }, {
            img:'/gallery/a56.jpg',
        },
        {
            img:'/gallery/a57.jpg',
        },
        {
            img:'/gallery/a58.jpg',
        },        
    ]
  return (
    <div>
        <div className='text-[30px] font-bold bg-gradient-to-r from-black via-purple-900 to-black text-white pt-[30px] flex items-center justify-center pb-[30px]'>
            Gallery
        </div>
        <GalleryPic galleryImages={galleryImages}/>
    </div>
  )
}

export default Gallery;

