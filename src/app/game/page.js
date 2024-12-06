"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Ghost } from 'lucide-react';

function Game() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='m-2 p-2'>
            <h1 className='font-bold text-2xl italic m-3'>Games</h1>
            <Link href="/simon" className='text-xl font-bold'>
               1. Simon Game
            </Link>
            <ul>
                <li>Simon Game is a memory game.</li>
                <li>Simon Game has four colored buttons, each producing a tone when pressed.</li>
                <li>A round consists of reproducing the button sequence shown by the device.</li>
                <li>Difficulty increases as the sequence grows longer.</li>
                <li>The game ends when the sequence is incorrect or 20 rounds are completed.</li>
                <li>
                    <Button  variant="outline" onClick={openModal}>Video Tutorial</Button>
                </li>
            </ul>

            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={closeModal}>&times;</span>
                        <video controls>
                            <source src='/How to play Simon.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

            <style jsx>{`
                .modal {
                    display: flex;
                    position: fixed;
                    z-index: 1;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    justify-content: center;
                    align-items: center;
                }
                .modal-content {
                    position: relative;
                    width: 80%;
                    max-width: 700px;
                    background: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                }
                .close {
                    position: absolute;
                    top: 0px;
                    right: 20px;
                    font-size: 35px;
                    cursor: pointer;
                    color:red;
                }
                video {
                    width: 100%;
                    height: auto;
                }
            `}</style>
                <Link href={'./snake'}>
            <h2 className='text-xl font-bold'>2. Snake Game</h2>    
                </Link>
            <ul>
                <li>Snake Game is a classic game.</li>
                <li>Snake Game has a snake that moves around the screen.</li>
                <li>Snake Game has a food item that the snake eats to grow.</li>
                <li>Snake Game ends when the snake collides with the screen border or itself.</li>
                
            </ul>
                <Link href={'./tictac'}>
            <h2 className='text-xl font-bold'>3. Tic Tac Game</h2>    
                </Link>
            <ul>
                <li>Tic Tac Game is a two-player game.</li>
                <li>Tic Tac Game has a 3x3 grid.</li>
                <li>Players take turns to place their mark (X or O) on the grid.</li>
                <li>The game ends when a player has three of their marks in a row, column, or diagonal.</li>
            </ul>
            
        </div>
    );
}

export default Game;
