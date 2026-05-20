import Image from 'next/image';
import styled from 'styled-components';

const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
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
      <Image
        src="/images/SmallMenuIcon.png"
        alt="داده یار"
        width={28}
        height={28}
        priority
        unoptimized
        style={{ objectFit: 'contain' }}
      />
      <span>داده یار</span>
    </Brand>
  );
}
