import { BreakContainer } from '@/styles/components/Break';
import React from 'react';

const Break: React.FC = () => {
  return (
    <BreakContainer>
      <blockquote>
        <p>
          “O verdadeiro segredo da felicidade está em ter um genuíno interesse
          por todos os detalhes da vida cotidiana.”
        </p>
        <cite>WILLIAM MORRIS</cite>
      </blockquote>
    </BreakContainer>
  );
};

export default Break;
