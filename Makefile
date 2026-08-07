.PHONY: dev build preview lint install clean

install:
	pnpm install

dev:
	pnpm --filter user dev

build:
	pnpm --filter user build

preview:
	pnpm --filter user preview

lint:
	pnpm -r lint

clean:
	rm -rf apps/user/dist apps/user/node_modules/.tmp
