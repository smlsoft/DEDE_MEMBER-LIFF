Update Page
เมื่อเราจะ update Vue.js project ให้ทำดังนี้

git checkout ไปยัง master
git checkout master
แก้ .gitignore ให้กลับไปเหมือนเดิม

git checkout .gitignore
แก้ Vue.js Project
เมื่อพัฒนา Vue.js จน statble ก็ให้ทำการ commit

nano -w src/components/HelloWorld.vue
git add src/components/HelloWorld.vue
git commit -m "Update Page"
git push
git checkout ไปยัง gh-pages
git checkout gh-pages
git merge master มา
git merge master
comment /dist ใน .gitignore อีกครั้ง

<!-- #/dist -->

Build Production
yarn build
Git add dist
git add dist
Git commit
git commit -m "Update Static"
Push Subtree ขึ้น Github repo
git subtree push --prefix dist origin gh-pages
