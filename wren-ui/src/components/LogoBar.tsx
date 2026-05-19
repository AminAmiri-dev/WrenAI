import styled from 'styled-components';
import { Logo } from '@/components/Logo';

const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--gray-1);
  font-size: 17px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1;
  white-space: nowrap;
`;

export default function LogoBar() {
  return (
    <Brand aria-label="داده یار">
      <Logo size={27} color="currentColor" />
      <span>داده یار</span>
    </Brand>
  );
}
