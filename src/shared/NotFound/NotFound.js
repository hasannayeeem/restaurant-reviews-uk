import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <section className='mt-[129px] lg:mt-[80px] md:mt-[80px]'>
            <div className='flex min-h-screen justify-center items-center flex-col'>
                <svg id="404-Dave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 250">
                    <defs>
                        <clipPath id="center-circle-clip"><circle cx="275.667" cy="122.667" r="84.33" />
                        </clipPath>
                    </defs>
                    <g id="bg">
                        <path id="Bg-green" fill="#00B284" d="M275.7 207c-46.5 0-84.3-37.8-84.3-84.3s37.8-84.3 84.3-84.3S360 76.2 360 122.7 322.2 207 275.7 207z" />
                        <g id="Clouds" fill="#FFF" clipPath="url(#center-circle-clip)">
                            <path id="cloud-right" d="M348 137c-8.5 0-15.4 6.9-15.4 15.3v.4c-4.4 1.1-7.7 5.2-7.7 10 0 5.6 4.6 10.3 10.2 10.3h5.8c7.4-9.7 12.7-21.2 15.3-33.6-2.3-1.5-5.1-2.4-8.2-2.4z" />
                            <path id="cloud-left" d="M219.3 131.1c0-4.5-3.8-8.2-8.4-7.8-1.3-3.7-4.8-6.3-8.8-6.3-3.9 0-7.3 2.4-8.7 5.9 0 5.5.6 10.9 1.6 16.2h16.5c4.2-.1 7.8-3.7 7.8-8z" />
                        </g>
                        <path id="Outline-blue" fill="#263D52" d="M275.7 40.3c45.5 0 82.3 36.9 82.3 82.3S321.1 205 275.7 205s-82.3-36.9-82.3-82.3 36.8-82.4 82.3-82.4m0-4c-47.6 0-86.3 38.7-86.3 86.3s38.7 86.3 86.3 86.3c47.6 0 86.3-38.7 86.3-86.3s-38.7-86.3-86.3-86.3z" />

                        <path fill="#2D495E" d="M275.7 45.3c44.6 0 80.9 35.5 82.3 79.8 0-.8.1-1.7.1-2.5 0-45.5-36.9-82.3-82.3-82.3s-82.3 36.9-82.3 82.3c0 .8 0 1.7.1 2.5 1.1-44.2 37.4-79.8 82.1-79.8z" id="Bg-Innershadow" opacity=".1" />
                    </g>
                    <g id="Dave-clipper" clipPath="url(#center-circle-clip)">
                        <g id="Dave">
                            <path id="Body" fill="#263D52" d="M251.5 187c-7 0-13.3 2.9-17.8 7.5 12.3 7.3 26.7 11.5 42 11.5 15.4 0 29.9-4.3 42.2-11.7-4.6-4.5-10.8-7.3-17.7-7.3h-48.7z" />
                            <rect id="Body-extender" x="228" y="187" width="95.673" height="50" rx="22.51" ry="22.51" fill="#263D52" />
                            <g id="Neck">
                                <path id="Neck-fill" fill="#FFF" d="M275.5 157c-8 0-14.5 6.5-14.5 14.5v15c0 8 6.5 14.5 14.5 14.5s14.5-6.5 14.5-14.5v-15c0-8-6.5-14.5-14.5-14.5z" />
                                <path id="Neck-outline" fill="#263D52" d="M275.5 202c-8.5 0-15.5-7-15.5-15.5v-15c0-8.5 7-15.5 15.5-15.5s15.5 7 15.5 15.5v15c0 8.5-7 15.5-15.5 15.5zm0-44c-7.4 0-13.5 6.1-13.5 13.5v15c0 7.4 6.1 13.5 13.5 13.5s13.5-6.1 13.5-13.5v-15c0-7.4-6.1-13.5-13.5-13.5z" />
                                <path fill="#E4ECF3" d="M262.1 187.7c4.5 1.3 9.3 1.9 14.4 1.7 4.4-.1 8.6-.8 12.5-2v-1.3l-.1-3.7c-4 1.2-8.2 1.9-12.6 2.1-5.1.2-9.9-.5-14.4-1.7l.1 4.2c0 .2.1.5.1.7z" id="Neck-Innershadow" />
                            </g>
                            <g id="Ears">
                                <g id="Ear-right">
                                    <path id="Ear-fill-right" fill="#B6CFD8" d="M314.8 130.2c-5.5 0-9.9-4.4-9.9-9.9s4.4-9.9 9.9-9.9 9.9 4.4 9.9 9.9-4.5 9.9-9.9 9.9z" />
                                    <path id="Ear-outline-right" fill="#263D52" d="M314.8 111.3c4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 3.9-8.9 8.9-8.9m0-2c-6 0-10.9 4.9-10.9 10.9s4.9 10.9 10.9 10.9 10.9-4.9 10.9-10.9-4.9-10.9-10.9-10.9z" />
                                </g>
                                <g id="Ear-left">
                                    <path id="Ear-fill-left" fill="#E1EDF4" d="M234.8 130.2c-5.5 0-9.9-4.4-9.9-9.9s4.4-9.9 9.9-9.9 9.9 4.4 9.9 9.9-4.5 9.9-9.9 9.9z" />
                                    <path id="Ear-outline-left" fill="#263D52" d="M234.8 111.3c4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 3.9-8.9 8.9-8.9m0-2c-6 0-10.9 4.9-10.9 10.9s4.9 10.9 10.9 10.9 10.9-4.9 10.9-10.9-4.9-10.9-10.9-10.9z" />
                                </g>
                            </g>
                            <g id="Face">
                                <path id="Face-fill" fill="#F2F8FC" d="M275 172c-22.6 0-41-18.3-41-40.9v-28.7c0-22.6 18.4-40.9 41-40.9s41 18.3 41 40.9v28.7c0 22.6-18.4 40.9-41 40.9z" />
                                <path id="Face-Outline" fill="#263D52" d="M275 62.5c22 0 40 17.9 40 39.9v28.7c0 22-18 39.9-40 39.9s-40-17.9-40-39.9v-28.7c0-22 18-39.9 40-39.9m0-2c-23.2 0-42 18.8-42 41.9v28.7c0 23.1 18.8 41.9 42 41.9s42-18.8 42-41.9v-28.7c0-23.1-18.8-41.9-42-41.9z" />
                                <path id="Face-innershadow" fill="#E1EDF4" d="M274.6 62.5c-2.2 0-4.2.2-6.3.5 19 3.1 33.7 19.5 33.7 39.4v28.7c0 19.8-15 36.3-33.9 39.4 2.1.3 4.5.5 6.7.5 22 0 40.2-17.9 40.2-39.9v-28.7c0-22-18.4-39.9-40.4-39.9z" />
                                <g id="Blush" fill="#E1EDF4">
                                    <circle id="blush-left" cx="249.5" cy="135" r="10.3" />
                                    <circle id="blush-right" cx="300.5" cy="134" r="10.3" />
                                </g>
                            </g>
                            <g id="Eyes" fill="#263D52">
                                <circle id="eyes-left" style={{ transformOrigin: '294.3px 114.3px' }} className="blinking-eyes" cx="256.4" cy="114.3" r="5.9" />
                                <circle id="eyes-right" style={{ transformOrigin: '294.3px 114.3px' }} className="blinking-eyes" cx="294.3" cy="114.3" r="5.9" />
                            </g>
                            <path id="unibrow" fill="#263D52" d="M304 106h-57c-.6 0-1-.4-1-1s.4-1 1-1h57c.6 0 1 .4 1 1s-.4 1-1 1z" />
                            <g id="facial-hair">
                                <path fill="#2D495E" d="M317.2 109.7l-1.2.1-1.3 19.6c0 6.6-3.1 12.7-10.2 12.7H254 246.4c-7.1 0-11.2-6.2-11.2-12.8l-.2-19.8h-2c-.6 7-2 27.4-2 32.9 0 23.3 19.4 42.1 44.5 42.1s44.5-18.7 44.5-42c0-5.5-2.2-25.8-2.8-32.8z" id="beard-lower" />
                                <path fill="#263D52" d="M317.2 109.7H316l-1.3 19.6c0 6.6-3.1 12.7-10.2 12.7H301v.4c0 20.3-14.6 37.1-35 41.1 3 .6 6.2.9 9.5.9 25.1 0 44.5-18.7 44.5-42 0-5.4-2.2-25.7-2.8-32.7z" id="beard-innershadow" />
                                <path id="moustache" fill="#2D495E" d="M297 142c-3-7-9.1-11.3-16-13-.9 2.1-3 3.4-5.5 3.4s-4.5-1.3-5.3-3.4c-7.1 1.6-13.1 6-16.1 13v1h43v-1z" />
                            </g>
                            <path fill="#263D52" d="M321.5 104.6h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0-4l-3 .1c-.3 0-.4.2-.4.5s.2.5.5.5l3-.1c.3 0 .5-.2.5-.5-.1-.3-.3-.5-.6-.5zm-.3-3.4c.3 0 .5-.3.4-.6 0-.3-.3-.5-.6-.4l-3 .3c-.3 0-.5.3-.4.6 0 .3.3.5.6.4l3-.3zm-.2-4.9c-.1-.3-.3-.5-.6-.4l-3 .6c-.3.1-.4.3-.4.6.1.3.3.4.6.4l3-.6c.3 0 .4-.3.4-.6zm-1.1-4.2c-.1-.3-.4-.4-.6-.3l-2.9.9c-.3.1-.4.4-.3.6.1.3.4.4.6.3l2.9-.9c.2 0 .4-.3.3-.6zm-1.4-4c-.1-.3-.4-.4-.7-.3L315 85c-.3.1-.4.4-.3.7.1.3.4.4.7.3l2.8-1.2c.3-.1.4-.4.3-.7zm-1.8-3.8c-.1-.3-.4-.3-.7-.2l-2.7 1.4c-.2.1-.3.4-.2.7.1.2.4.3.7.2l2.7-1.4c.2-.2.3-.5.2-.7zm-2.1-3.7c-.2-.2-.5-.3-.7-.2l-2.6 1.6c-.2.1-.3.5-.2.7.1.2.5.3.7.2l2.6-1.6c.3-.2.3-.5.2-.7zm-2.4-3.4c-.2-.2-.5-.3-.7-.1l-2.4 1.9c-.2.2-.3.5-.1.7.2.2.5.3.7.1l2.4-1.9c.2-.2.2-.5.1-.7zm-2.8-3.2c-.2-.2-.5-.2-.7 0l-2.2 2.1c-.2.2-.2.5 0 .7.2.2.5.2.7 0l2.2-2.1c.2-.2.2-.5 0-.7zm-2.9-3c-.2-.2-.5-.2-.7 0l-2 2.3c-.2.2-.2.5 0 .7.2.2.5.2.7 0l2-2.3c.2-.2.2-.5 0-.7zm-3.3-2.7c-.2-.2-.5-.1-.7.1l-1.8 2.4c-.2.2-.1.5.1.7.2.2.5.1.7-.1l1.8-2.4c.2-.2.2-.5-.1-.7zm-3.4-2.3c-.2-.2-.6-.1-.7.2l-1.6 2.6c-.1.2-.1.5.2.7.2.1.5.1.7-.2l1.6-2.6c.1-.3 0-.6-.2-.7zm-3.7-2.1c-.3-.1-.6 0-.7.2l-1.4 2.7c-.1.2 0 .5.2.7.2.1.5 0 .7-.2l1.4-2.7c.1-.3 0-.6-.2-.7zm-3.9-1.7c-.3-.1-.6 0-.7.3l-1.1 2.8c-.1.3 0 .5.3.6.3.1.5 0 .6-.3l1.1-2.8c.2-.3.1-.5-.2-.6zm-4-1.4c-.3-.1-.6.1-.6.3l-.9 2.9c-.1.3.1.5.3.6.3.1.5-.1.6-.3l.9-2.9c.1-.3-.1-.6-.3-.6zm-4.2-1.1c-.3-.1-.5.1-.6.4l-.6 3c-.1.3.1.5.4.6.3.1.5-.1.6-.4l.6-3c0-.2-.2-.5-.4-.6zm-4.4-.7c-.3 0-.5.2-.6.5l-.3 3c0 .3.2.5.4.5.3 0 .5-.1.5-.4l.3-3c.2-.3 0-.6-.3-.6zm-4.4 0c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5s.5-.2.5-.5v-3.1c0-.2-.3-.4-.5-.4zm-4.5 0c-.3 0-.5.3-.5.6l.3 3c0 .3.3.4.5.4.3 0 .5-.2.5-.5l-.3-3c0-.3-.2-.5-.5-.5zm-4.4.7c-.3.1-.5.3-.4.6l.6 3c0 .3.3.5.6.4.3 0 .5-.3.4-.6l-.6-3c0-.3-.3-.5-.6-.4zm-3.6 1.3c-.1-.3-.4-.4-.6-.3-.3.1-.4.4-.3.6l.8 2.9c.1.3.4.4.6.3.3-.1.4-.4.3-.6l-.8-2.9zm-4 1.3c-.1-.3-.4-.4-.6-.3-.3.1-.4.4-.3.6l1.1 2.8c.1.3.4.4.6.3.3-.1.4-.4.3-.6l-1.1-2.8zm-3.9 1.6c-.1-.2-.4-.3-.7-.2-.2.1-.3.4-.2.7l1.3 2.7c.1.2.4.3.7.2.2-.1.3-.4.2-.7l-1.3-2.7zm-3.7 2c-.1-.2-.5-.3-.7-.2-.2.1-.3.5-.2.7l1.6 2.6c.1.2.5.3.7.2.2-.1.3-.5.2-.7l-1.6-2.6zm-3.5 2.3c-.2-.2-.5-.3-.7-.1-.2.2-.3.5-.1.7l1.8 2.4c.2.2.5.3.7.1.2-.2.3-.5.1-.7l-1.8-2.4zm-3.2 2.6c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l2 2.3c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-2-2.3zm-3 2.8c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l2.2 2.1c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-2.2-2.1zm-2.8 3.1c-.2-.2-.5-.1-.7.1-.2.2-.1.5.1.7l2.4 1.9c.2.2.5.1.7-.1.2-.2.1-.5-.1-.7l-2.4-1.9zm.1 5l-2.5-1.7c-.2-.2-.5-.1-.7.1-.2.2-.1.5.1.7l2.5 1.7c.2.2.5.1.7-.1.2-.2.2-.5-.1-.7zm-2 3.4l-2.7-1.4c-.2-.1-.5 0-.7.2-.1.2 0 .5.2.7l2.7 1.4c.2.1.5 0 .7-.2.1-.3.1-.6-.2-.7zm-1.7 3.5l-2.8-1.2c-.3-.1-.5 0-.7.3-.1.3 0 .5.3.7l2.8 1.2c.3.1.5 0 .7-.3.1-.3-.1-.6-.3-.7zm-1.4 3.7l-2.9-.9c-.3-.1-.5.1-.6.3-.1.3.1.5.3.6l2.9.9c.3.1.5-.1.6-.3.1-.2-.1-.5-.3-.6zm-1.1 3.8l-3-.6c-.3-.1-.5.1-.6.4-.1.3.1.5.4.6l3 .6c.3.1.5-.1.6-.4.1-.2-.1-.5-.4-.6zm-.7 4l-3-.4c-.3 0-.5.2-.6.4 0 .3.2.5.4.6l3 .4c.3 0 .5-.2.6-.4.1-.3-.1-.5-.4-.6zm-.3 4.1l-3-.1c-.3 0-.5.2-.5.5s.2.5.5.5l3 .1c.3 0 .5-.2.5-.5 0-.2-.2-.5-.5-.5zm0 4.1h-3.1c-.3 0-.4.2-.4.5s.2.5.5.5h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" id="Hair" />
                        </g>
                    </g>
                    <g fill="#263D52" id="Numbers">
                        <path d="M165.3 173.2h-20.8V209h-35.7v-35.8H35.2v-25.4l75.7-111.5h33.7v108.5h20.8v28.4zm-56.4-28.3v-29.3c0-4.9.2-12 .6-21.3.4-9.3.7-14.7.9-16.2h-.9c-2.9 6.5-6.4 12.8-10.5 18.9l-31.7 47.8h41.6zM512.3 173.2h-20.8V209h-35.7v-35.8h-73.7v-25.4l75.7-111.5h33.7v108.5h20.8v28.4zM456 145.1v-29.3c0-4.9.2-12 .6-21.3.4-9.3.7-14.7.9-16.2h-.9c-2.9 6.5-6.4 12.8-10.5 18.9l-31.7 47.9H456z" />
                    </g>
                    <g id="easter-egg">
                        <path fill="#263D52" d="M212.9 23.4s-.5.2-1.5.7c-1 .4-2.3 1-3.8 1.9-1.5.9-3.2 2.1-4.5 3.8-.6.8-1.2 1.8-1.5 2.9-.1.2-.1.6-.2.8 0 .3-.1.5-.1.8-.1.5 0 1.1 0 1.6.2 2.2 1.3 4.3 2.5 5.9.2.2.3.4.5.6.2.2.3.4.5.6.3.4.7.8 1 1.1l2 2c1.3 1.2 2.5 2.1 3.3 2.8.8.7 1.2 1.1 1.2 1.1l-.1.2s-.6-.2-1.5-.7c-1-.4-2.3-1.1-3.9-2.2-.8-.5-1.6-1.1-2.4-1.8-.4-.4-.8-.7-1.2-1.2-.2-.2-.4-.4-.5-.6-.2-.3-.4-.5-.6-.7-.7-1-1.3-2.1-1.7-3.3-.4-1.2-.7-2.5-.7-3.8 0-.6 0-1.3.1-1.9 0-.3.1-.7.2-1 .1-.3.1-.5.3-.9.4-1.2 1.1-2.3 1.9-3.2 1.6-1.8 3.5-2.9 5.1-3.7 1.6-.8 3.1-1.3 4.1-1.6 1-.3 1.6-.5 1.6-.5l-.1.3z" id="arrow-curve" />
                        <path fill="#263D52" d="M209.1 41.6c.4.6.8 1.2 1.2 1.9.4.6.7 1.3 1 1.9.6 1.3 1.2 2.6 1.7 4 .2.5-.1 1.1-.6 1.3-.1.1-.3.1-.4.1-.8 0-1.7-.1-2.5 0l-1.3.1c-.4 0-.8.1-1.3.1-1.7.2-3.4.5-5.1.9.3-.3.7-.6 1.1-.8.4-.2.8-.5 1.2-.7l1.2-.6c.4-.2.9-.3 1.3-.4.9-.2 1.8-.4 2.7-.5.9-.1 1.8-.1 2.8 0l-1 1.3c-.5-1.4-.9-2.7-1.2-4.1-.2-.7-.3-1.4-.5-2.1-.1-.9-.3-1.6-.3-2.4z" id="arrow-elbow" />
                        <g id="Name" fill="#263D52">
                            <path d="M223.1 22.6l-.3.6c-.3.2-.7.4-1.1.6-.4 0-.6.2-1 .2h-.1l-.3.2-.1-.1-.1.1h-.6l-.2.1-.2-.1-.1.1-.1-.1c-.4.4-.2.1-.4.1-.1.1-.2.2-.4.2l-.2-.1v-.2l-.2.1v-.1c-.2-.4-.2-.9-.1-1.3 0-.2 0-.5-.1-.7-.2-.1-.3-.2-.4-.3.1-.2.2-.4.4-.4l-.1-.2h.1v-.2c0-.3-.1-.5-.1-.8h-.1c0-.2 0-.4-.1-.6l-.1.1-.1-.1-.1.1v-.1l-.2.1-.1-.1-.2.1c-.7-.4-.4-.8.2-.9h1c.7.1 1.5.2 2.2.3.4.1.8.3 1.2.5h.2c0 .1.1.2.3.3.1.5-.3.9-.8 1-.2.1-.3.2-.5.2-.4.2-1 .4-1.5.5.4.1.8.2 1.3.1.5 0 3.1 0 3.1.8zm-2.3-2.3c0-.1-.1-.1-.1-.2-.1 0-.2 0-.3-.1l-.1.1c-.1-.1-.2-.2-.4-.2h-.1c-.2-.1-.5-.2-.8-.1l-.1-.1h-.1l-.1.1-.2-.1c0 .5.1.9 0 1.4h.3c.1 0 .1-.1.1-.2.6-.1 1.2-.4 1.9-.6zm1.4 2.4c-.1 0-.1-.1-.2 0v-.1c-.2-.1-.3-.1-.5-.1l-.1-.1c-.1.1-.2 0-.3-.1-.3.2-1.3-.1-1.7 0l-.2-.1v.1s-.7-.2-.7 0c0 .1 0 .2.1.3l-.1.1c.1.2.1.5 0 .7v.2c.3-.1.5-.1.8 0 .5-.5 2.1-.6 2.7-.8.1.1.1 0 .2-.1zM226.4 22.8c0 .1-.1.4-.2.5-.5.4-1 .7-1.5 1-.1 0-.3 0-.4.1-.7-.6-.8-1.4-.5-2.2-.1-.3.2-.8 0-1 0-.1.1-.3.1-.4-.2-.5.6-1.1.8-.5v1c0 .7-.3 1.4-.3 2.1l.1.1h.1c.2 0 .3-.1.4-.2h.1v-.1h.1l.1-.1h.1v-.2c.2-.1.5-.2.8-.3.1.1.2.1.2.2 0 .2 0-.1 0 0zm-1-5.3c-.1.1-.2.1-.2.2-.4.4-.9.7-1.3 1.1l-.2-.1c0-.3.1-.5.3-.7h.1v-.2h.2v-.1h.1c0-.1.3-.5.3-.6.5 0 .7.2.7.4zM229.7 23.2c0 1.9-2.7.8-2.7-1.3.1-.3.2-.6.1-.9.1-.9.2-1.9.2-2.9.3-.1.4-.1.4-.1.1 0 .4.3.4.4-.1.6-.1 1.1-.2 1.6l.1.1c-.2 1.1-.2 2.2-.2 3.2 0 0 .1.1.1.2h.2l.1-.1c.3-.1 1.5-1 1.5-.2zM233 23.2c0 1.9-2.7.8-2.7-1.3.1-.3.2-.6.1-.9.1-.9.2-1.9.2-2.9.3-.1.4-.1.4-.1.1 0 .4.3.4.4-.1.6-.1 1.1-.2 1.6l.1.1c-.2 1.1-.2 2.2-.2 3.2 0 0 .1.1.1.2h.2l.1-.1c.3-.1 1.5-1 1.5-.2zM240.1 20.2l-.1.1.1.2c-.1.1-.2.3-.2.4-.1.3-.1.5-.1.8l-.1.1c0 .1 0 .2.1.2l-.1.1c0 .2-.1.3 0 .5l-.1.1.1.1c-.1.1-.1.2-.1.3h.1c-.1.1-.1.3-.1.4h.2l.1.2-.1.1h.1c0 .1.1.1.1.2-.1.2-.3.3-.5.4h-.2c-.4-.6-.5-1.4-.4-2.2-.5.9-1.2 1.7-2 2.2-.4-.1-.7-.4-.9-.8 0-.1 0-.2-.1-.3.1-.4.1-.8.2-1.2h.1c-.2-.2.1-.5.2-.6l-.1-.1c.2-.2.3-.5.2-.7 0-.3.3-.6.5-.9h.1c.4-.2.8-.3 1.3-.2v.1c.2 0 .4.1.5.2v-.1c.2.3.5.3.8.1.1.2.2.3.4.3zm-1 .5c-.2-.3-.5-.4-.8-.4h-.1c-.1-.1-.2-.1-.3 0-.3.1-.6.4-.7.7l.1.1-.2.1-.3.9v.4l-.1.2v.1l-.1.1.1.2-.1.1v.2c.1 0 .1 0 .2-.1v-.1h.1c.2-.2.4-.4.7-.6.1-.2.2-.3.3-.4h.1V22h.1c.2-.4.6-.7.7-1.1.2.1.3 0 .3-.2zM242.7 24l-.1.1c-.1 0-.2.1-.2.2-.3.1-.7 0-.9-.3 0-.4.2-.5.5-.7.1 0 .2 0 .2.1.2.1.4.2.5.4-.1.1-.1.2 0 .2zM249.7 23.5c-1.4 1.9-2.9 1.2-4.2-.8-.2-.2-.4-.8.2-.9.4.3.8.4 1.3.2.2 0 .3 0 .5-.1.1-.2.4-.4.5-.6h.1c0-.2 0-.3.2-.3h-.1v-.2s0-.1-.1-.1h-.1c0-.1-.1-.1-.2-.2h-.4c-1 .1-1.8.6-2.2 1.5 0 .1 0 .1-.1.2-.8 2.9-1 1.8-.9-.7 0-1-.1-2-.1-3 .2-.2.5-.4.8-.5v3.5c.1-.3.2-.6.4-.9h.1c.8-.8 2-1 3.1-.5V20c.1 0 .1.1.2.2.8-.2 0 1.5-.1 1.7-.1 0-.2.1-.2.2-.1 0-.1 0-.2-.1v.2c-.1 0-.1.1-.1.2-.4.2-1 .2-1.4.4.5 1.4 1.8 1.5 2.6.6.1-.2.3-.1.4.1zM251.6 24l-.1.1c-.1 0-.2.1-.2.2-.3.1-.7 0-.9-.3 0-.4.2-.5.5-.7.1 0 .2 0 .2.1.2.1.4.2.5.4-.1.1-.1.2 0 .2zM256.8 20.2l-.1.1.1.2c-.1.1-.2.3-.2.4-.1.3-.1.5-.1.8l-.1.1c0 .1 0 .2.1.2l-.1.1c0 .2-.1.3 0 .5l-.1.1.1.1c-.1.1-.1.2-.1.3h.1c-.1.1-.1.3-.1.4h.2l.1.2-.1.1h.1c0 .1.1.1.1.2-.1.2-.3.3-.5.4h-.2c-.4-.6-.5-1.4-.4-2.2-.5.9-1.2 1.7-2 2.2-.4-.1-.7-.4-.9-.8 0-.1 0-.2-.1-.3.1-.4.1-.8.2-1.2h.1c-.2-.2.1-.5.2-.6l-.1-.1c.2-.2.3-.5.2-.7 0-.3.3-.6.5-.9h.1c.4-.2.8-.3 1.3-.2v.1c.2 0 .4.1.5.2v-.1c.2.3.5.3.8.1.1.2.2.3.4.3zm-1 .5c-.2-.3-.5-.4-.8-.4h-.1c-.1-.1-.2-.1-.3 0-.3.1-.6.4-.7.7l.1.1-.2.1-.3.9v.4l-.1.2v.1l-.1.1.1.2-.1.1v.2c.1 0 .1 0 .2-.1v-.1h.1c.2-.2.4-.4.7-.6.1-.2.2-.3.3-.4h.1V22h.1c.2-.4.6-.7.7-1.1.2.1.3 0 .3-.2zM262.3 18.8c0 .2-.1.4-.3.6v.1c-.2.7-.6 1.1-1.3 1.1-.1-.2-.1-.5 0-.7.3-.4 1-1.4 1.5-1.4l.1.3zm1.6 0c-.1.2-.2.4-.3.5v.2c-.1.1-.2.2-.1.3l-.1.1c0 .8-.7.8-1.1.4.1-.1.2-.3.1-.4.1 0 .1-.1.2-.1.3-.1.4-.5.6-.6.1-.3.3-.7.7-.6v.2zM266 22.6h-.1v.3c0 .5-.1 1-.2 1.5l.1.1-.2.1v.2l-.1.1v.1h-.1c0 .1-.1.2-.2.2v.3c-.3.5-.8.8-1.3 1.1-.6.1-1.1.2-1.7.1l-.2.2-.1-.2c-.2-.1-.5-.1-.7 0l-.1-.2h-.3l-.1-.1h-.3c-.1-.1-.2-.1-.3-.1-.9-.4 1.2-.4 1.6-.2h1.7V26h.2l.1-.1c.3 0 .4-.2.5-.4l.1-.1c0-.1 0-.2.2-.3v-.2l-.1-.1.1-.1v-.1c.2-.2.3-.4.2-.7h.1v-.2h.1l-.1-.3h.1c.1-.6.2-1.2.2-1.8l-.1-.1c0-.5 0-1-.1-1.4h-.1c.1-1.3.6-1.2 1.1-.7l-.1.2c.1.1.1.1 0 .2h.1v2.6l-.1.1c.1 0 .1 0 .2.1zM270.8 21.9c-.1.5-.2.9-.4 1.4h-.1c-.1.2-.2.3-.4.4v.1c-.7.6-1.5.8-2.4.7-.1-.2-.2-.3-.4-.5.1-.2.1-.3-.1-.5 0-.4.1-.9.3-1.3h.1c-.1-.2 0-.3.1-.5-.1-.3.1-.6.3-.8.1-.1.2-.2.2-.4.2 0 .4-.2.4-.4.3 0 .6 0 .9-.1.2.2.3.3.6.3.5.5.8 1 .9 1.6zm-.7.3c0-.1 0-.1-.1-.2v-.1c-.1-.1-.1-.2-.1-.4-.1-.1-.3-.3-.3-.4h-.1c-.1-.2-.5-.3-.6-.4-.1.2-.3.4-.5.6v.1h-.1v.3l-.1.1c0 .2 0 .3-.2.4 0 .9-.8 1.4.3 1.7v-.1h.3c.4-.2.7-.5 1.1-.8 0-.1.1-.2.1-.3.1-.1.2-.1.2-.2s0-.2.1-.3zM275.8 24.2c0 1.1-1-.4-1-.8.1-.8.2-1.7 0-2.5-.3.1-.4.3-.6.5h-.1c-.1.1-.2.3-.2.4-.3.5-.6 1.1-1 1.5v.4h-.1c-.1.3-.3.5-.5.8-.1 0-.2-.1-.3-.1-.2-.6-.3-1.2-.2-1.9h.1c0-.3.1-.7.1-1 .1-.2.1-.4 0-.6-.1-.1-.1-.2 0-.3l-.1-.1c.1-.2.1-.5 0-.7l.1-.1c0-.4-.2-.9-.4-1.3.1-.1.2-.2.2-.3.4.1.6.3.8.6.1 1.4.1 2.8-.1 4.2.3-.1.6-1 .6-1.2h.1v-.2l.1-.1v-.1h.1v-.2c.1 0 .2-.1.2-.1v-.1h.1l.1-.2c.1 0 .2 0 .2-.1v-.1c.2-.1.3-.1.5-.2.4-.2.6-.1.9.2.1 1.1.2 2.4.3 3.4v.1c.1 0 .1.1.1.2zM283.2 22.7c0 .1-.3.4-.3.6h-.1c-.2.2-.4.5-.6.7-.3.1-.6.2-.9.2-.8-.8-1.2-1.8-1.2-2.9-.3.3-.6.7-.8 1.1-.4.7-1.1 1.5-1.8 2-.2-.1-.4-.3-.5-.5.1-.1.1-.2 0-.4.1-.1 0-.3-.1-.4l.1-.1v-.1c.1-.1.1-.3.1-.4 0-.7 0-1.5.2-2.1.4.1.6.3.6.6 0 .4 0 .9-.1 1.3l.1.2c-.1.1-.1.2 0 .3-.1.2-.1.3-.1.5.1-.1.2-.4.4-.5.1-.1.2-.1.2-.2l.7-.7c-.2.1-.3.2-.3.4.1-.1.2-.3.2-.5h.1c0-.1.1-.2.1-.3l.1-.1c0-.3.7-.7.9-.9h.2l.2.2h.1v.2l.2.1c0 .7.2 1.4.4 2.1h.2c0 .1 0 .2.1.3 0 0 .1 0 .1.1v-.1c.1 0 .3-.2.4-.2 0-.1.1-.1.1-.2h.1c.2-.2.3-.5.4-.7.2-.1.3-.1.5 0-.1-.1 0 .3 0 .4zM292.3 23.3c0 .9-4.6.8-5.1.8-.7-.5-.9-1.3-.8-2.1l.1-.1c.1-.7.2-1.5.3-2.2l-.1-.1.1-.4-.1-.2c.2-.2.5-.2.7-.2l.2.5-.1.1c.2.3-.3 3-.2 3.8.6.2 5 .2 5 .1z" />
                            <path d="M296 21.9c-.1.5-.2.9-.4 1.4h-.1c-.1.2-.2.3-.4.4v.1c-.7.6-1.5.8-2.4.7-.1-.2-.2-.3-.4-.5.1-.2.1-.3-.1-.5 0-.4.1-.9.3-1.3h.1c-.1-.2 0-.3.1-.5-.1-.3.1-.6.3-.8.1-.1.2-.2.2-.4.2 0 .4-.2.4-.4.3 0 .6 0 .9-.1.2.2.3.3.6.3.5.5.8 1 .9 1.6zm-.7.3c0-.1 0-.1-.1-.2v-.1c-.1-.1-.1-.2-.1-.4-.1-.1-.3-.3-.3-.4h-.1c-.1-.2-.5-.3-.6-.4-.1.2-.3.4-.5.6v.1h-.1v.3l-.1.1c0 .2 0 .3-.2.4 0 .9-.8 1.4.3 1.7v-.1h.3c.1 0 .1-.1.1-.1.3-.2.6-.4.9-.7 0-.1.1-.2.1-.3.1-.1.2-.1.2-.2.1-.1.1-.2.2-.3zM300.4 22.7c-.5.8-1.3 1.4-2.2 1.7l-.1-.1-.1.1h-.4c-.7-.3-1.1-1-1-1.7v-.1c.1-.3.2-.6.2-1 .4-1.2 1.1-1.7 2.3-1.3.1.2.2.3.3.5v.4h.1v.5c-.1.1-.3.2-.5.2-.2-.4-.4-.5-.4-.9 0-.1-.1-.1-.2-.2-.4.1-.6.3-.7.7h-.1c-.2.4-.3.8-.3 1.3h-.1c0 .3 0 .5.2.7h.1v.1c1 .1 1.8-.4 2.3-1.2v-.2c.5 0 .6.2.6.5zM306.9 23.5c-1.4 1.9-2.9 1.2-4.2-.8-.2-.2-.4-.8.2-.9.4.3.8.4 1.3.2l.1-.1c.2 0 .3 0 .5-.1.1-.2.4-.4.5-.6h.1c0-.2 0-.3.2-.3h-.1v-.2l-.1-.1h-.1c0-.1-.1-.1-.2-.2h-.4c-1 .1-1.8.6-2.2 1.5 0 .1 0 .1-.1.2-.8 2.9-1 1.8-.9-.7 0-1-.1-2-.1-3 .2-.2.5-.4.8-.5v3.5c.1-.3.2-.6.4-.9h.1c.8-.8 2-1 3.1-.5v-.1c.1 0 .1.1.2.2.8-.2 0 1.5-.1 1.7-.1 0-.2.1-.2.2-.1 0-.1 0-.2-.1v.2c-.1 0-.1.1-.1.2-.4.2-1 .2-1.4.4.5 1.4 1.8 1.5 2.6.6 0-.1.2 0 .3.2zM310.4 23.5l-.3.6h-.1l-.1.2c-.2 0-.4.1-.5.3-.1 0-.3 0-.4.1-.1 0-.2 0-.3.2-.2-.1-1.1-.3-1.2-.5l-.1-.1c0-.1-.1-.2-.2-.2-.2-.6-.1-1.1 0-1.7 0-.3 0-1.1.2-1.4.1.1.2.1.3.1.1-.3.3-.5.4-.8h.1c.5-.6 1.1-.7 1.6-.2.2.3.3.6.2 1-.2.2-.3.5-.4.7-.5.3-1 .6-1.5.7-.1-.1-.1-.1-.2-.1 0 .1 0 .2-.1.3-.1.2 0 .4 0 .6 0 .3.1.6.5.7.3.1.7 0 .9-.2.4-.2.7-.4 1.1-.6.1 0 .1.2.1.3zm-.9-2.9v-.1c-.5.1-1 .5-1.2 1.1.1 0 .2-.1.3-.1v-.1h.1l.1-.1h.2v-.1h.1V21c.2 0 .4-.2.4-.4zM312.9 19.1c-.1.1-.1.3-.1.4-.1 0-.1.1-.2.1-.2 0-.5.5-.6.6-.1.3-.3.6-.7.6 0-.3.1-.6.3-.9v-.2c.1-.1.2-.2.2-.3.1-.1.1-.3.1-.3.3-.5.7-.6 1 0zm1.6 0c-.1.1-.1.2-.1.4-.3.4-1 1.4-1.5 1.4-.1-.3 0-.7.2-1v-.1c.2-.7.6-1.1 1.3-1.1 0 .2 0 .3.1.4z" />
                        </g>
                    </g>
                </svg>
                <Link to='/' className='bg-secondary px-4 py-2 rounded text-white relative bottom-16 font-medium hover:bg-primary duration-300' >Go Back To Home</Link>
            </div>
        </section>
    );
};

export default NotFound;